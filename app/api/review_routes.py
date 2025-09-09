from flask import Blueprint, request, jsonify, render_template
from app.models import User, db, BeveragePost, Review, Category, Brand
from app.forms import PostReview
# from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
# from app.forms import PostDrink


review_routes = Blueprint('reviews', __name__)


@review_routes.route('/<int:postId>', methods=['POST'])
@login_required
def post_rev(postId):
    """
    This is to make a review when selecting a post
    that doesn't belong to user.
    """

    drink = BeveragePost.query.filter_by(id=postId).first()
    review = Review.query.filter_by(
        beverage_post_id=postId, user_id=current_user.id).first()

    if current_user:
        if drink:
            if current_user.id != drink.user_id:
                form = PostReview()
                if not review:
                    form['csrf_token'].data = request.cookies['csrf_token']
                    if (form.rating.data <= 5 and form.rating.data >= 0):
                        newRev = Review(
                            user_id=current_user.to_dict()['id'],
                            beverage_post_id=int(postId),
                            rating=int(form.rating.data),
                            review=form.review.data
                        )
                        db.session.add(newRev)
                        db.session.commit()
                        return jsonify({'message': 'Your review was created'}), 201
                    else:
                        return jsonify({'error': 'The rating has to be a whole number between 0-5'}), 400
                else:
                    return jsonify({'error': 'You already have a review for this post'}), 403
            else:
                return jsonify({'error': 'You cannot leave a review for your own drink'}), 400
        else:
            return jsonify({'error': 'There is no post for you to make a review for'}), 404
    else:
        return jsonify({'error': 'Please log in or create an account in order to post your drink'}), 401


@review_routes.route('/user/<int:revId>', methods=['PATCH', 'DELETE'])
@login_required
def create_review(revId):
    """
    This is to update and or delete the users review
    """
    rev = Review.query.filter_by(id=revId).first()

    if request.method == 'PATCH':
        if rev:
            if current_user.id == rev.user_id:
                form = PostReview()
                form['csrf_token'].data = request.cookies['csrf_token']
                if (form.rating.data <= 5 and form.rating.data >= 0):
                    rev.review = form.review.data
                    rev.rating = form.rating.data
                    db.session.commit()
                    return jsonify({'message': 'The review has been updated'}), 200
                else:
                    return jsonify({'error': 'The rating has to be a whole number between 0-5'}), 400
            else:
                return jsonify({'error': 'This review does not belong to you'}), 403
        else:
            return ({'error': 'There is no review found'}), 404

    if request.method == 'DELETE':
        if rev:
            if current_user.id == rev.user_id:
                db.session.delete(rev)
                db.session.commit()
                return jsonify({'message': 'Your review has been deleted'}), 200
            else:
                return jsonify({'error': 'This review does not belong to you'}), 403
        else:
            return ({'error': 'There is no review found'}), 404
