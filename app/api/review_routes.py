from flask import Blueprint, request, jsonify, render_template
from app.models import User, db, BeveragePost, Review, Category, Brand
# from app.forms import LoginForm
# from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
# from app.forms import PostDrink



review_routes = Blueprint('reviews', __name__)


# @drink_posts.route('/<int:postId')
# def all_reviews():
#     """
#     This is to get all of the reviews for a post
#     """


# @drink_posts.route('/create-rev', methods=['POST'])
# def create_review():
#     """
#     This is to make a review when selecting a post
#     that doesn't belong to user.
#     """







# @drink_posts.route('/<int:revId>', methods=['DELETE'])
# def update_delete_rev(revId):
#     """
#     user is able to delete their review
#     """
