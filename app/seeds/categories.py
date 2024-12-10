from app.models import db, environment, SCHEMA, Category
from sqlalchemy.sql import text


def seed_categories():
    wine = Category(name='Wine')
    beer = Category(name='Beer')
    vodka = Category(name='Vodka')
    whiskey = Category(name='Whiskey')

    db.session.add(wine)
    db.session.add(beer)
    db.session.add(vodka)
    db.session.add(whiskey)
    db.session.commit()


def undo_categories():
    if environment == 'production':
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))
    db.session.commit()
