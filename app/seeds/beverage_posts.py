from app.models import db, environment, SCHEMA, BeveragePost
from sqlalchemy.sql import text


def seed_posts():
    modelo_post_1 = BeveragePost(
        user_id=1,
        brand_id=1,
        category_id=2,
        name='Modelo',
        img='https://t3.ftcdn.net/jpg/03/57/03/74/360_F_357037402_bAhK6uDB6ZEojrfjoO1tgJLaTa3TS1ct.jpg',
        oz=12,
        alc=4.4,
        rating=4,
        cal=143,
        carbs=14,
        sodium=20,
        desc='Brewed with the fighting spirit'
    )
    corona_post_2 = BeveragePost(
        user_id=1,
        brand_id=5,
        category_id=2,
        name='Corona Extra',
        img='https://t3.ftcdn.net/jpg/02/97/77/82/360_F_297778247_pW5YVBCM2fSdkhs6BozhF5RVbedWsjTY.jpg',
        oz=12,
        alc=4,
        rating=3,
        cal=139,
        carbs=18,
        sodium=22,
        desc='Familia'
    )
    bud_light_post_3 = BeveragePost(
        user_id=2,
        brand_id=6,
        category_id=2,
        name='Bud Light',
        img='https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
        oz=12,
        alc=4.4,
        rating=2,
        cal=140,
        carbs=12,
        sodium=18,
        desc='''Bud Light is a light-bodied, American-style lager
        beer with a crisp taste and a clean finish. The ingredients
        within a Bud Light is: brewed with barley malts, rice, and a blend of
        American-grown and imported premium aroma hops. The rice gives Bud Light its clean finish.
'''
    )
    barefoot_drink = BeveragePost(
        user_id=3,
        brand_id=7,
        category_id=1,
        name='Barefoot Cabernet Sauvignon',
        img='https://static.specsonline.com/wp-content/uploads/2023/11/008500004521.jpg',
        oz=28,
        alc=14.1,
        rating=4,
        cal=122,
        carbs=5,
        sodium=5,
        desc='tasted like juice'
    )
    ciroc_drink = BeveragePost(
        user_id=2,
        brand_id=3,
        category_id=3,
        name='Ciroc Passion Limited Edition',
        img='https://www.liquorstore-online.com/product_images/p_204734_medium.jpg',
        oz=25,
        alc=40,
        rating=1,
        cal=50,
        carbs=14,
        sodium=4,
        desc='This was a harsh shot'
    )
    jameson_drink = BeveragePost(
        user_id=3,
        brand_id=11,
        category_id=4,
        name='Modelo',
        img='https://images.squarespace-cdn.com/content/v1/61affa9c931dc960c27460a1/1ad137bd-1737-4924-8cdd-850c058439e6/Jameson+6.JPG',
        oz=25,
        alc=48,
        rating=3,
        cal=150,
        carbs=11,
        sodium=8,
        desc='This drink was okay'
    )

    db.session.add(modelo_post_1)
    db.session.add(corona_post_2)
    db.session.add(bud_light_post_3)
    db.session.add(barefoot_drink)
    db.session.add(ciroc_drink)
    db.session.add(jameson_drink)
    db.session.commit()


def undo_posts():
    if environment == 'production':
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.beverage_posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM beverage_posts"))
    db.session.commit()
