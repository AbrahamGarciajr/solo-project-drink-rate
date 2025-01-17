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
        desc='Tasted okay, was not a huge fan but would get again because it was super cheap.'
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
        img='https://thewhiskeywash.com/wp-content/uploads/2021/08/jameson-orange.jpg',
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
