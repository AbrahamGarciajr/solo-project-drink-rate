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





    modelo_post_2 = BeveragePost(
        user_id=2,
        brand_id=1,
        category_id=2,
        name='Modelo watermelon miche',
        img='https://shopsk.com/cdn/shop/products/8542077e-5585-4fe2-a1d9-50982263d16d_1806x.jpg?v=1677090078',
        oz=12,
        alc=4.4,
        rating=5,
        cal=143,
        carbs=14,
        sodium=20,
        desc='Tastes so sweet, drank 30 of them'
    )
    modelo_post_3 = BeveragePost(
        user_id=3,
        brand_id=1,
        category_id=2,
        name='Modelo aguas frescas pineapple',
        img='https://mmwineliquor.com/cdn/shop/files/ModeloSpikedAguaFresca24floz.jpg?v=1723223051&width=480',
        oz=12,
        alc=4.4,
        rating=2,
        cal=143,
        carbs=14,
        sodium=20,
        desc='horrible, just tasted like water with little flavor'
    )
    modelo_post_4 = BeveragePost(
        user_id=3,
        brand_id=1,
        category_id=2,
        name='Modelo negro',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTboSXl1klGBnPoWh_P1f-3DhPJk_FP3yTVEQ&s',
        oz=12,
        alc=4.4,
        rating=3,
        cal=143,
        carbs=14,
        sodium=20,
        desc='made me super bloated, not a fan of the dark but did not hate it'
    )

    corona_post_02 = BeveragePost(
        user_id=1,
        brand_id=5,
        category_id=2,
        name='Corona no alc',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QwriucRayWC4WsqSADLPEbp28MHnnyAMpg&s',
        oz=12,
        alc=0,
        rating=1,
        cal=139,
        carbs=18,
        sodium=22,
        desc='this did not taste as good without the alcohol.'
    )
    corona_post_3 = BeveragePost(
        user_id=2,
        brand_id=5,
        category_id=2,
        name='Corona light',
        img='https://contenthandler-raleys.fieldera.com/prod/130937/1/0/0/10200065-Main.jpg',
        oz=12,
        alc=4,
        rating=3,
        cal=98,
        carbs=18,
        sodium=22,
        desc='still got me drunk but was not all that good. I feel kinda skinny'
    )
    bud_light_post_02 = BeveragePost(
        user_id=2,
        brand_id=6,
        category_id=2,
        name='Bud Light tajin miche',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQUruW6EuYrNjdQIms4M_DpQFh_N-sx0rw&s',
        oz=12,
        alc=4.4,
        rating=4,
        cal=140,
        carbs=12,
        sodium=18,
        desc='this was a really good drink, had to drink a lot just to feel something.'
    )
    bud_light_post_03 = BeveragePost(
        user_id=3,
        brand_id=6,
        category_id=2,
        name='Bud Light miche',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrz_TtLByadtnuGL1GCy6JS2NbNheZyxylQ&s',
        oz=12,
        alc=4.4,
        rating=2,
        cal=140,
        carbs=12,
        sodium=18,
        desc='This was an okay drink, I would not get it again'
    )


    barefoot_drink_2 = BeveragePost(
        user_id=1,
        brand_id=7,
        category_id=1,
        name='Barefoot moscato',
        img='https://shopsk.com/cdn/shop/products/Studio_Project-2022-07-02T085705.499_1806x.jpg?v=1656777438',
        oz=28,
        alc=14.1,
        rating=2,
        cal=122,
        carbs=5,
        sodium=5,
        desc='had a very bitter taste, was not that huge of a fan.'
    )
    barefoot_drink_3 = BeveragePost(
        user_id=3,
        brand_id=7,
        category_id=1,
        name='Barefoot pink moscato',
        img='https://cdn.shopify.com/s/files/1/1410/8098/files/barefoot-pink-moscato.jpg?v=1690682670',
        oz=28,
        alc=14.1,
        rating=4,
        cal=122,
        carbs=5,
        sodium=5,
        desc='had a bitter taste but was still somewhat sweet'
    )

    ciroc_drink_2 = BeveragePost(
        user_id=2,
        brand_id=3,
        category_id=3,
        name='Ciroc original',
        img='https://winenliquor.com/wp-content/uploads/ciroc-vodka-1l.jpg',
        oz=25,
        alc=40,
        rating=2,
        cal=50,
        carbs=14,
        sodium=4,
        desc='Noting special about this, it was okay'
    )
    ciroc_drink_3 = BeveragePost(
        user_id=1,
        brand_id=3,
        category_id=3,
        name='Ciroc apple',
        img='https://cdn.shopify.com/s/files/1/0046/8602/0675/files/Ciroc-cocktail-Apple-Smash_5bb332ae-f6c4-4d85-b462-3a6a15292c7e_2048x2048.jpg?v=1566491781',
        oz=25,
        alc=40,
        rating=3,
        cal=50,
        carbs=14,
        sodium=4,
        desc='At first it tasted like apple, until it the rubbing alcohol hit'
    )

    jameson_drink_2 = BeveragePost(
        user_id=3,
        brand_id=11,
        category_id=4,
        name='Jameson Orange',
        img='data:image/jpeg;base64,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',
        oz=25,
        alc=48,
        rating=1,
        cal=150,
        carbs=11,
        sodium=8,
        desc='this was horrible would not recommend!!'
    )
    jameson_drink_3 = BeveragePost(
        user_id=1,
        brand_id=11,
        category_id=4,
        name='Jameson orange spritz',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADe43YW16ozJUAItdFkrSY45MvmbgS23l0g&s',
        oz=25,
        alc=48,
        rating=2,
        cal=150,
        carbs=11,
        sodium=8,
        desc='this was alright, I got tired of the taste after 4 drinks'
    )

    franzia_post_1 = BeveragePost(
        user_id=1,
        brand_id=2,
        category_id=1,
        name='Franzia spiked lemonade',
        img='https://customercorner.badgerliquor.com/storage/images/zooms/FRANZIA-SPIKED-LEMONADE.jpg',
        oz=25,
        alc=14,
        rating=3,
        cal=150,
        carbs=11,
        sodium=8,
        desc='this was alright, I got tired of the taste after 4 drinks'
    )
    franzia_post_2 = BeveragePost(
        user_id=2,
        brand_id=2,
        category_id=1,
        name='Franzia Cabernet Sauvignon',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8qEEzutQNpyTK2Ho5B28T7ulSSUgmZjTtg&s',
        oz=25,
        alc=14,
        rating=2,
        cal=150,
        carbs=11,
        sodium=8,
        desc='Nothing special, it was okay. Drank the whole thing by myself lol'
    )
    franzia_post_3 = BeveragePost(
        user_id=3,
        brand_id=2,
        category_id=1,
        name='Franzia Merlot',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2pXL54J7so8SueC3GF4M-q1ZSW3bUdxD4Q&s',
        oz=25,
        alc=14,
        rating=5,
        cal=150,
        carbs=11,
        sodium=8,
        desc='So easy to drink, killed 2 boxes with some buddies.'
    )

    yellow_tail_post_1 = BeveragePost(
        user_id=1,
        brand_id=8,
        category_id=1,
        name='YellowTail tropical pineapple',
        img='https://www.winemadeeasy.com/media/catalog/product/cache/f8d2cb12a17084a7445beefcce31e97a/y/e/yellow_tail_twist_pineapple_nv_750.jpg',
        oz=25,
        alc=14,
        rating=1,
        cal=150,
        carbs=11,
        sodium=8,
        desc='I had high hopes for this wine, I love pineapple. This was not good!!!'
    )
    yellow_tail_post_2 = BeveragePost(
        user_id=2,
        brand_id=8,
        category_id=1,
        name='YellowTail Cabernet Merlot',
        img='https://www.yellowtailwine.com/wp-content/uploads/formidable/6/AU-Cabernet-Merlot_570x640.png',
        oz=25,
        alc=14,
        rating=3,
        cal=150,
        carbs=11,
        sodium=8,
        desc='pretty good, could go for some more right now honestly.'
    )
    yellow_tail_post_3 = BeveragePost(
        user_id=3,
        brand_id=8,
        category_id=1,
        name='YellowTail Chardonnay',
        img='https://icdn.bottlenose.wine/images/full/397743.jpg?min-w=200&min-h=200&fit=crop',
        oz=25,
        alc=14,
        rating=4,
        cal=150,
        carbs=11,
        sodium=8,
        desc='Pretty sweet tasting, not a huge fan of wine so I was really surprised.'
    )

    tito_post_1 = BeveragePost(
        user_id=3,
        brand_id=9,
        category_id=3,
        name='tito mini',
        img='https://www.hiproof.com/cdn/shop/products/titos-handmade-vodka-50ml-640098.jpg?v=1706343796&width=1920',
        oz=15,
        alc=40,
        rating=2,
        cal=50,
        carbs=14,
        sodium=4,
        desc='was not worth the purchase, might as well get the larger bottle of titos.'
    )
    tito_post_2 = BeveragePost(
        user_id=1,
        brand_id=9,
        category_id=3,
        name='titos handmade',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZb9qx8hIouhtAHa5gKG5QqbzsDaOUk7lrA&s',
        oz=25,
        alc=40,
        rating=4,
        cal=50,
        carbs=14,
        sodium=4,
        desc='Did the job but I wish I bought the larger bottle, went by so fast.'
    )
    tito_post_3 = BeveragePost(
        user_id=2,
        brand_id=9,
        category_id=3,
        name='Tito big jug',
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr18DbmssBUPz-Lt74NZmYDyJEphjsRoBNpw&s',
        oz=60,
        alc=40,
        rating=2,
        cal=50,
        carbs=14,
        sodium=4,
        desc='I am sick of this thing. Bought over a month ago and I still have it. Anyone want the rest of this?? '
    )

    skyy_post_1 = BeveragePost(
        user_id=3,
        brand_id=10,
        category_id=3,
        name='Skyy passion fruit',
        img='https://www.vintageliquorkenya.com/wp-content/uploads/2021/08/Skyy_Vodka_Passion_700ml.jpg',
        oz=25,
        alc=40,
        rating=1,
        cal=50,
        carbs=14,
        sodium=4,
        desc='this taste like someone took a fart in the vodka, sealed it and packaged it as passion fruit.'
    )
    skyy_post_2 = BeveragePost(
        user_id=1,
        brand_id=10,
        category_id=3,
        name='Skyy agave lime',
        img='https://cdn11.bigcommerce.com/s-ryneghvxt8/images/stencil/original/products/4031/3844/SKYY-Agave_Lime-750_ml__79695.1697653614.jpg',
        oz=25,
        alc=40,
        rating=4,
        cal=50,
        carbs=14,
        sodium=4,
        desc='I saw that post about passion fruit so I got this one instead. Def recommend!'
    )
    skyy_post_3 = BeveragePost(
        user_id=2,
        brand_id=10,
        category_id=3,
        name='Skyy raspberry',
        img='https://siestaspirits.com/cdn/shop/products/skyy_raspberry.jpg?v=1571264372',
        oz=25,
        alc=40,
        rating=2,
        cal=50,
        carbs=14,
        sodium=4,
        desc='Did not hate, but did not enjoy. Try it, you guys will see'
    )


    db.session.add(modelo_post_1)
    db.session.add(corona_post_2)
    db.session.add(bud_light_post_3)
    db.session.add(barefoot_drink)
    db.session.add(ciroc_drink)
    db.session.add(jameson_drink)
    db.session.add(modelo_post_2)
    db.session.add(modelo_post_3)
    db.session.add(modelo_post_4)
    db.session.add(corona_post_02)
    db.session.add(corona_post_3)
    db.session.add(bud_light_post_03)
    db.session.add(bud_light_post_02)
    db.session.add(barefoot_drink_2)
    db.session.add(barefoot_drink_3)
    db.session.add(ciroc_drink_2)
    db.session.add(ciroc_drink_3)
    db.session.add(jameson_drink_2)
    db.session.add(jameson_drink_3)
    db.session.add(franzia_post_1)
    db.session.add(franzia_post_2)
    db.session.add(franzia_post_3)
    db.session.add(yellow_tail_post_1)
    db.session.add(yellow_tail_post_2)
    db.session.add(yellow_tail_post_3)
    db.session.add(tito_post_1)
    db.session.add(tito_post_2)
    db.session.add(tito_post_3)
    db.session.add(skyy_post_1)
    db.session.add(skyy_post_2)
    db.session.add(skyy_post_3)


    # leave buchanannana empty so we could see what an empty one would look like

    db.session.commit()


def undo_posts():
    if environment == 'production':
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.beverage_posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM beverage_posts"))
    db.session.commit()
