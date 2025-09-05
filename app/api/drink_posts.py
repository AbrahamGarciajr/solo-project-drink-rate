from flask import Blueprint, request, jsonify, render_template
from flask_login import current_user, login_user, logout_user, login_required

from app.api.aws_s3 import upload_file_to_s3, get_unique_filename, allowed_file, remove_file_s3
from app.models import User, db, BeveragePost, Review, Category, Brand
from app.config import Config
from app.forms import PostDrink
from app.forms import UpdateDrink


drink_posts = Blueprint('posts', __name__)


@drink_posts.route('/')
def recent_drinks():
    """
    Home page returns a list of all the
    drinks from recent to oldest post
    """
    drinks = BeveragePost.query.all()
    if drinks:
        allDrinks = [drink.to_dict() for drink in reversed(drinks)]
        for drink in allDrinks:
            revs = Review.query.filter_by(beverage_post_id=drink['id']).all()
            if revs:
                total_ratings = sum(rev.rating for rev in revs)
                drink['avgRating'] = (
                    total_ratings + drink['rating'])/(len(revs)+1)
            else:
                drink['avgRating'] = drink['rating']
        return allDrinks
    else:
        return jsonify({'message': 'There are currently no drinks posted'})


@drink_posts.route('/categories')
def all_categories():
    """
    gets all of the categories
    """
    categories = Category.query.all()

    return [cat.to_dict() for cat in categories]


@drink_posts.route('/categories/<int:categoryId>')
def category_selection(categoryId):
    """
    For when a user selects a category of beverages it will return a
    list of all the brands associated with that category
    """
    category = Category.query.filter_by(id=categoryId).first()
    if category:
        brands = Brand.query.filter_by(category_id=categoryId).all()
        if brands:
            return [brand.to_dict() for brand in brands]
        else:
            return jsonify({'error': 'There are no brands for this category just yet'}), 404
    else:
        return jsonify({'error': 'There are no categories just yet'}), 404


@drink_posts.route('/brands/<int:brandId>')
def brand_selection(brandId):
    """
    for when a user selects a brand of beverages, it will return a list
    of all the beverage posts under that brand
    """
    brand = Brand.query.filter_by(id=brandId).first()
    if brand:
        drinks = BeveragePost.query.filter_by(brand_id=brandId).all()
        if drinks:
            allDrinks = [drink.to_dict() for drink in drinks]
            for drink in allDrinks:
                revs = Review.query.filter_by(
                    beverage_post_id=drink['id']).all()
                if revs:
                    total_ratings = sum(rev.rating for rev in revs)
                    drink['avgRating'] = (
                        total_ratings + drink['rating'])/(len(revs) + 1)
                else:
                    drink['avgRating'] = drink['rating']
            return allDrinks
        else:
            return jsonify({'error': 'No Drinks are available for this brand yet'})
    else:
        return jsonify({'error': 'there is no such brand just yet'}), 404


@drink_posts.route('/<int:postId>')
def selected_drink(postId):
    """
    When a drink is selected then it provides all
    the details and reviews for that drink
    """
    drink = BeveragePost.query.filter_by(id=postId).first()
    good_drink = drink.to_dict()
    if good_drink:
        revs = Review.query.filter_by(beverage_post_id=postId).all()
        if revs:
            good_drink['reviews'] = [rev.to_dict() for rev in revs]
            total_ratings = sum(rev.rating for rev in revs)
            good_drink['avgRating'] = (
                total_ratings + good_drink['rating'])/(len(revs) + 1)
        else:
            good_drink['avgRating'] = good_drink['rating']
        return good_drink
    else:
        return jsonify({'error': 'How did you get here? A post for this drink does not exist'}), 404


@drink_posts.route('/<int:postId>', methods=['DELETE', 'PATCH'])
@login_required
def del_patch_drink(postId):
    """
    Used to delete and or update a drink post only if it
    is owned by the user
    """
    drink = BeveragePost.query.get(postId)

    if not drink:
        return jsonify({'error': 'How did you get here? A post for this drink does not exist'}), 404

    good_drink = drink.to_dict()
    if current_user.to_dict()['id'] != good_drink['user_id']:
        return jsonify({'error': 'You do not own this post, you cannot mess with it'}), 403

    if request.method == 'DELETE':
        if current_user:

            remove = remove_file_s3(drink.img)
            if remove is not True:
                return {"errors": "Failed to remove the file from S3"}, 500

            db.session.delete(drink)
            db.session.commit()
            return jsonify({'message': 'Your post has been deleted'})
        else:
            return jsonify({'error': 'How did you get here? You need to be logged in to delete YOUR post'}), 401

    if request.method == 'PATCH':
        categories = Category.query.all()
        available_cats = [cat.to_dict() for cat in categories]
        brands = Brand.query.all()
        available_brands = [brand.to_dict() for brand in brands]

        category_choices = [(cat['id'], cat['name']) for cat in available_cats]
        brand_choices = [(brand['id'], brand['name'])
                         for brand in available_brands]

        form = UpdateDrink()
        form['csrf_token'].data = request.cookies['csrf_token']
        form.category.choices = category_choices
        form.brand.choices = brand_choices

        if form.validate_on_submit():
            drink.oz = form.data['oz']
            drink.alc = form.data['alc']
            drink.cal = form.data['cal']
            drink.carbs = form.data['carbs']
            drink.sodium = form.data['sodium']
            drink.brand_id = form.data['brand']
            drink.category_id = form.data['category']
            drink.name = form.data['name']
            drink.img = drink.img
            drink.rating = form.data['rating']
            drink.desc = form.data['desc']
            db.session.commit()
            return jsonify({'message': 'Your post was updated'})
        else:
            return jsonify(form.errors), 400


@drink_posts.route('/post-drink', methods=['POST'])
@login_required
def create_post():
    """
    This is for creating a drink post, I made it a
    get so that I can run my tests from the backend
    before moving on to the front, making the get useless
    """
    categories = Category.query.all()
    available_cats = [cat.to_dict() for cat in categories]
    brands = Brand.query.all()
    available_brands = [brand.to_dict() for brand in brands]

    category_choices = [(cat['id'], cat['name']) for cat in available_cats]
    brand_choices = [(brand['id'], brand['name'])
                     for brand in available_brands]

    form = PostDrink()
    form['csrf_token'].data = request.cookies['csrf_token']

    form.category.choices = category_choices
    form.brand.choices = brand_choices
    picked_brand = Brand.query.filter_by(id=form.brand.data).first()

    # print(form.data, 'the dataaaaa')

    if current_user:
        if picked_brand:
            if picked_brand.to_dict()['category_id'] == form.category.data:
                if form.validate_on_submit():
                    image = form.img.data
                    # print(image, 'the image')

                    if not allowed_file(image.filename):
                        return {"errors": "Invalid file type"}, 400

                    image.filename = get_unique_filename(image.filename)
                    # print(type(image), 'filename')
                    upload = upload_file_to_s3(image)
                    # print(upload)

                    if 'errors' in upload:
                        return jsonify(upload), 400

                    url = upload['url']
                    # print(url, 'from the route')
                    new_drink = BeveragePost(
                        user_id=current_user.to_dict()['id'],
                        brand_id=form.data['brand'],
                        category_id=form.data['category'],
                        name=form.data['name'],
                        img=url,
                        oz=form.data['oz'],
                        alc=form.data['alc'],
                        rating=form.data['rating'],
                        cal=form.data['cal'],
                        carbs=form.data['carbs'],
                        sodium=form.data['sodium'],
                        desc=form.data['desc']
                    )
                    db.session.add(new_drink)
                    # print(new_drink)
                    db.session.commit()
                    return jsonify({'message': 'Your post was created'}), 201
            else:
                return jsonify({'error': 'The brand does not match the category of drink'}), 400
    else:
        return jsonify({'error': 'Please log in or create an account in order to post your drink'}), 401
    # return jsonify({'message': 'Your post was created'}), 201
    # return render_template('post_drink.html', form=form)
