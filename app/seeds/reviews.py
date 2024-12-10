from app.models import db, environment, SCHEMA, Review
from sqlalchemy.sql import text


def seed_reviews():
    rev1 = Review(
        user_id=1,
        beverage_post_id=3,
        review='this is a review for the drink, I am user 1 for drink post 3',
        rating=3)
    rev2 = Review(
        user_id=2,
        beverage_post_id=1,
        review='this is a review for the drink, I am user 2 for drink post 1',
        rating=3)
    rev3 = Review(
        user_id=3,
        beverage_post_id=1,
        review='this is a review for the drink, I am user 3 for drink post 1',
        rating=3)
    rev4 = Review(
        user_id=2,
        beverage_post_id=2,
        review='this is a review for the drink, I am user 2 for drink post 2',
        rating=3)
    rev5 = Review(
        user_id=1,
        beverage_post_id=4,
        review='this is a review for the drink, I am user 1 for drink post 4',
        rating=3)
    rev6 = Review(
        user_id=2,
        beverage_post_id=4,
        review='this is a review for the drink, I am user 2 for drink post 4',
        rating=3)
    rev7 = Review(
        user_id=3,
        beverage_post_id=5,
        review='this is a review for the drink, I am user 3 for drink post 5',
        rating=3)
    rev8 = Review(
        user_id=3,
        beverage_post_id=2,
        review='this is a review for the drink, I am user 3 for drink post 2',
        rating=3)

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.add(rev5)
    db.session.add(rev6)
    db.session.add(rev7)
    db.session.add(rev8)
    db.session.commit()


def undo_reviews():
    if environment == 'production':
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
