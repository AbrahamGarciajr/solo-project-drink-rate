from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, BeveragePost, Review

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/posts')
@login_required
def user_posts(id):
    """
    retrieves all the user's posts
    """

    # print(id, 'the iddddddd')
    posts = BeveragePost.query.filter_by(
        user_id=id).order_by(BeveragePost.id.desc())
    # print(posts, 'the postsssss')
    if not id:
        return jsonify({'Error': 'User must be logged in'})

    if posts:
        allDrinks = [post.to_dict() for post in posts]
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
