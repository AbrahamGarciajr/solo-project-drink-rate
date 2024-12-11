from flask import Blueprint, request, jsonify
from app.models import User, db, BeveragePost, Review, Category, Brand
# from app.forms import LoginForm
# from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required


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
                    total_ratings + drink['rating'])/(len(revs) + 1)
            else:
                drink['avgRating'] = drink['rating']
        return allDrinks
    else:
        return jsonify({'error': 'There are currently no drinks posted'})


@drink_posts.route('/<int:postId>')
def drink_from_home(postId):
    """
    When a drink is selected the it provides all
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
            good_drink['avgRating'] = drink['rating']
        return good_drink
    else:
        # print(drink)
        return jsonify({'error': 'How did you get here? A post for this drink does not exist'}), 404
    # print(postId)


@drink_posts.route('/category/<int:categoryId>')
def category_selection(categoryId):
    """
    For when a user selects a category of beverages
    """
    # categories = Category.query.all()
    category = Category.query.filter_by(id=categoryId).first()
    if category:
        brands = Brand.query.filter_by(category_id=categoryId).all()
        if brands:
            return [brand.to_dict() for brand in brands]
        else:
            # print('this is ittttttttt')
            return jsonify({'error': 'There are no brands for this category just yet'}), 404
    else:
        return jsonify({'error': 'There are no categories just yet'}), 404


@drink_posts.route('/brand/<int:brandId>')
def brand_selection(brandId):
    """
    for when a user selects a brand of beverages
    """
    brand = Brand.query.filter_by(id=brandId).first()
    if brand:
        drinks = BeveragePost.query.filter_by(brand_id=brandId).all()
        if drinks:
            return [drink.to_dict() for drink in drinks]
        else:
            return jsonify({'error': 'No Drinks are available for this brand yet'})
    else:
        return jsonify({'error': 'there is no such brand just yet'}), 404
