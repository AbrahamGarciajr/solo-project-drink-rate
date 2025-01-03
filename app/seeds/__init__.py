from flask.cli import AppGroup
from .users import seed_users, undo_users
from .categories import seed_categories, undo_categories
from .brands import seed_brands, undo_brands
from .beverage_posts import seed_posts, undo_posts
from .reviews import seed_reviews, undo_reviews

from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        # db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
        # add turncate command for every table I will create!!!
        # ORRRR create another file and mimic the users.py file to clean up the tables
        undo_users()
        undo_categories()
        undo_brands()
        undo_posts()
        undo_reviews()
    seed_users()
    seed_categories()
    seed_brands()
    seed_posts()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_categories()
    undo_brands()
    undo_posts()
    undo_reviews()
    # Add other undo functions here
