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


    rev9 = Review(
        user_id=1,
        beverage_post_id=1,
        review='this drink was okay, makes sense',
        rating=2)
    rev10 = Review(
        user_id=2,
        beverage_post_id=1,
        review='I had better but still pretty good',
        rating=3)
    rev11 = Review(
        user_id=3,
        beverage_post_id=1,
        review='this was a really good drink',
        rating=5)

    rev12 = Review(
        user_id=1,
        beverage_post_id=2,
        review='this drink was okay, makes sense',
        rating=2)
    rev13 = Review(
        user_id=2,
        beverage_post_id=2,
        review='I had better but still pretty good',
        rating=3)
    rev14 = Review(
        user_id=3,
        beverage_post_id=2,
        review='this was a really good drink',
        rating=5)

    rev15 = Review(
        user_id=1,
        beverage_post_id=3,
        review='this drink was okay, makes sense',
        rating=2)
    rev16 = Review(
        user_id=2,
        beverage_post_id=3,
        review='I had better but still pretty good',
        rating=3)
    rev17 = Review(
        user_id=3,
        beverage_post_id=3,
        review='this was a really good drink',
        rating=5)

    rev15 = Review(
        user_id=1,
        beverage_post_id=4,
        review='this drink was okay, makes sense',
        rating=2)
    rev16 = Review(
        user_id=2,
        beverage_post_id=4,
        review='I had better but still pretty good',
        rating=3)
    rev17 = Review(
        user_id=3,
        beverage_post_id=4,
        review='this was a really good drink',
        rating=5)

    rev18 = Review(
        user_id=1,
        beverage_post_id=5,
        review='this drink was okay, makes sense',
        rating=2)
    rev19 = Review(
        user_id=2,
        beverage_post_id=5,
        review='I had better but still pretty good',
        rating=3)
    rev20 = Review(
        user_id=3,
        beverage_post_id=5,
        review='this was a really good drink',
        rating=5)

    rev21 = Review(
        user_id=1,
        beverage_post_id=6,
        review='this drink was okay, makes sense',
        rating=2)
    rev22 = Review(
        user_id=2,
        beverage_post_id=6,
        review='I had better but still pretty good',
        rating=3)
    rev23 = Review(
        user_id=3,
        beverage_post_id=6,
        review='this was a really good drink',
        rating=5)

    rev24 = Review(
        user_id=1,
        beverage_post_id=7,
        review='this drink was okay, makes sense',
        rating=2)
    rev25 = Review(
        user_id=2,
        beverage_post_id=7,
        review='I had better but still pretty good',
        rating=3)
    rev26 = Review(
        user_id=3,
        beverage_post_id=7,
        review='this was a really good drink',
        rating=5)

    rev27 = Review(
        user_id=1,
        beverage_post_id=8,
        review='this drink was okay, makes sense',
        rating=2)
    rev28 = Review(
        user_id=2,
        beverage_post_id=8,
        review='I had better but still pretty good',
        rating=3)
    rev29 = Review(
        user_id=3,
        beverage_post_id=8,
        review='this was a really good drink',
        rating=5)

    rev30 = Review(
        user_id=1,
        beverage_post_id=9,
        review='this drink was okay, makes sense',
        rating=2)
    rev31 = Review(
        user_id=2,
        beverage_post_id=9,
        review='I had better but still pretty good',
        rating=3)
    rev32 = Review(
        user_id=3,
        beverage_post_id=9,
        review='this was a really good drink',
        rating=5)

    rev33 = Review(
        user_id=1,
        beverage_post_id=10,
        review='this drink was okay, makes sense',
        rating=2)
    rev34 = Review(
        user_id=2,
        beverage_post_id=10,
        review='I had better but still pretty good',
        rating=3)
    rev35 = Review(
        user_id=3,
        beverage_post_id=10,
        review='this was a really good drink',
        rating=5)

    rev36 = Review(
        user_id=1,
        beverage_post_id=11,
        review='this drink was okay, makes sense',
        rating=2)
    rev37 = Review(
        user_id=2,
        beverage_post_id=11,
        review='I had better but still pretty good',
        rating=3)
    rev38 = Review(
        user_id=3,
        beverage_post_id=11,
        review='this was a really good drink',
        rating=5)

    rev39 = Review(
        user_id=1,
        beverage_post_id=12,
        review='this drink was okay, makes sense',
        rating=2)
    rev40 = Review(
        user_id=2,
        beverage_post_id=12,
        review='I had better but still pretty good',
        rating=3)
    rev41 = Review(
        user_id=3,
        beverage_post_id=12,
        review='this was a really good drink',
        rating=5)

    rev42 = Review(
        user_id=1,
        beverage_post_id=13,
        review='this drink was okay, makes sense',
        rating=2)
    rev43 = Review(
        user_id=2,
        beverage_post_id=13,
        review='I had better but still pretty good',
        rating=3)
    rev44 = Review(
        user_id=3,
        beverage_post_id=13,
        review='this was a really good drink',
        rating=5)

    rev45 = Review(
        user_id=1,
        beverage_post_id=14,
        review='this drink was okay, makes sense',
        rating=2)
    rev46 = Review(
        user_id=2,
        beverage_post_id=14,
        review='I had better but still pretty good',
        rating=3)
    rev47 = Review(
        user_id=3,
        beverage_post_id=14,
        review='this was a really good drink',
        rating=5)

    rev48 = Review(
        user_id=1,
        beverage_post_id=15,
        review='this drink was okay, makes sense',
        rating=2)
    rev49 = Review(
        user_id=2,
        beverage_post_id=15,
        review='I had better but still pretty good',
        rating=3)
    rev50 = Review(
        user_id=3,
        beverage_post_id=15,
        review='this was a really good drink',
        rating=5)


    rev51 = Review(
        user_id=1,
        beverage_post_id=16,
        review='this drink was okay, makes sense',
        rating=2)
    rev52 = Review(
        user_id=2,
        beverage_post_id=16,
        review='I had better but still pretty good',
        rating=3)
    rev53 = Review(
        user_id=3,
        beverage_post_id=16,
        review='this was a really good drink',
        rating=5)

    rev54 = Review(
        user_id=1,
        beverage_post_id=17,
        review='this drink was okay, makes sense',
        rating=2)
    rev55 = Review(
        user_id=2,
        beverage_post_id=17,
        review='I had better but still pretty good',
        rating=3)
    rev56 = Review(
        user_id=3,
        beverage_post_id=17,
        review='this was a really good drink',
        rating=5)

    rev57 = Review(
        user_id=1,
        beverage_post_id=18,
        review='this drink was okay, makes sense',
        rating=2)
    rev58 = Review(
        user_id=2,
        beverage_post_id=18,
        review='I had better but still pretty good',
        rating=3)
    rev59 = Review(
        user_id=3,
        beverage_post_id=18,
        review='this was a really good drink',
        rating=5)

    rev60 = Review(
        user_id=1,
        beverage_post_id=19,
        review='this drink was okay, makes sense',
        rating=2)
    rev61 = Review(
        user_id=2,
        beverage_post_id=19,
        review='I had better but still pretty good',
        rating=3)
    rev62 = Review(
        user_id=3,
        beverage_post_id=19,
        review='this was a really good drink',
        rating=5)

    rev63 = Review(
        user_id=1,
        beverage_post_id=20,
        review='this drink was okay, makes sense',
        rating=2)
    rev64 = Review(
        user_id=2,
        beverage_post_id=20,
        review='I had better but still pretty good',
        rating=3)
    rev65 = Review(
        user_id=3,
        beverage_post_id=20,
        review='this was a really good drink',
        rating=5)

    rev66 = Review(
        user_id=1,
        beverage_post_id=21,
        review='this drink was okay, makes sense',
        rating=1)
    rev67 = Review(
        user_id=2,
        beverage_post_id=21,
        review='I had better but still pretty good',
        rating=3)
    rev68 = Review(
        user_id=3,
        beverage_post_id=21,
        review='this was a really good drink',
        rating=5)


    rev69 = Review(
        user_id=1,
        beverage_post_id=22,
        review='this drink was okay, makes sense',
        rating=1)
    rev70 = Review(
        user_id=2,
        beverage_post_id=22,
        review='I had better but still pretty good',
        rating=3)
    rev71 = Review(
        user_id=3,
        beverage_post_id=22,
        review='this was a really good drink',
        rating=5)

    rev72 = Review(
        user_id=1,
        beverage_post_id=23,
        review='this drink was okay, makes sense',
        rating=1)
    rev73 = Review(
        user_id=2,
        beverage_post_id=23,
        review='I had better but still pretty good',
        rating=3)
    rev74 = Review(
        user_id=3,
        beverage_post_id=23,
        review='this was a really good drink',
        rating=5)

    rev75 = Review(
        user_id=1,
        beverage_post_id=24,
        review='this drink was okay, makes sense',
        rating=1)
    rev76 = Review(
        user_id=2,
        beverage_post_id=24,
        review='I had better but still pretty good',
        rating=3)
    rev77 = Review(
        user_id=3,
        beverage_post_id=24,
        review='this was a really good drink',
        rating=5)

    rev78 = Review(
        user_id=1,
        beverage_post_id=25,
        review='this drink was okay, makes sense',
        rating=1)
    rev79 = Review(
        user_id=2,
        beverage_post_id=25,
        review='I had better but still pretty good',
        rating=3)
    rev80 = Review(
        user_id=3,
        beverage_post_id=25,
        review='this was a really good drink',
        rating=5)

    rev81 = Review(
        user_id=1,
        beverage_post_id=26,
        review='this drink was okay, makes sense',
        rating=1)
    rev82 = Review(
        user_id=2,
        beverage_post_id=26,
        review='I had better but still pretty good',
        rating=3)
    rev83 = Review(
        user_id=3,
        beverage_post_id=26,
        review='this was a really good drink',
        rating=5)

    rev84 = Review(
        user_id=1,
        beverage_post_id=27,
        review='this drink was okay, makes sense',
        rating=1)
    rev85 = Review(
        user_id=2,
        beverage_post_id=27,
        review='I had better but still pretty good',
        rating=3)
    rev86 = Review(
        user_id=3,
        beverage_post_id=27,
        review='this was a really good drink',
        rating=5)

    rev87 = Review(
        user_id=1,
        beverage_post_id=28,
        review='this drink was okay, makes sense',
        rating=1)
    rev88 = Review(
        user_id=2,
        beverage_post_id=28,
        review='I had better but still pretty good',
        rating=3)
    rev89 = Review(
        user_id=3,
        beverage_post_id=28,
        review='this was a really good drink',
        rating=5)

    rev90 = Review(
        user_id=1,
        beverage_post_id=29,
        review='this drink was okay, makes sense',
        rating=1)
    rev91 = Review(
        user_id=2,
        beverage_post_id=29,
        review='I had better but still pretty good',
        rating=3)
    rev92 = Review(
        user_id=3,
        beverage_post_id=29,
        review='this was a really good drink',
        rating=5)

    rev93 = Review(
        user_id=1,
        beverage_post_id=30,
        review='this drink was okay, makes sense',
        rating=1)
    rev94 = Review(
        user_id=2,
        beverage_post_id=30,
        review='I had better but still pretty good',
        rating=3)
    rev95 = Review(
        user_id=3,
        beverage_post_id=30,
        review='this was a really good drink',
        rating=5)

    rev96 = Review(
        user_id=1,
        beverage_post_id=31,
        review='this drink was okay, makes sense',
        rating=1)
    rev97 = Review(
        user_id=2,
        beverage_post_id=31,
        review='I had better but still pretty good',
        rating=3)
    rev98 = Review(
        user_id=3,
        beverage_post_id=31,
        review='this was a really good drink',
        rating=5)



    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.add(rev5)
    db.session.add(rev6)
    db.session.add(rev7)
    db.session.add(rev8)
    db.session.add(rev9)
    db.session.add(rev10)
    db.session.add(rev11)
    db.session.add(rev12)
    db.session.add(rev13)
    db.session.add(rev14)
    db.session.add(rev15)
    db.session.add(rev16)
    db.session.add(rev17)
    db.session.add(rev18)
    db.session.add(rev19)
    db.session.add(rev20)
    db.session.add(rev21)
    db.session.add(rev22)
    db.session.add(rev23)
    db.session.add(rev24)
    db.session.add(rev25)
    db.session.add(rev26)
    db.session.add(rev27)
    db.session.add(rev28)
    db.session.add(rev29)
    db.session.add(rev30)
    db.session.add(rev31)
    db.session.add(rev32)
    db.session.add(rev33)
    db.session.add(rev34)
    db.session.add(rev35)
    db.session.add(rev36)
    db.session.add(rev37)
    db.session.add(rev38)
    db.session.add(rev39)
    db.session.add(rev40)
    db.session.add(rev41)
    db.session.add(rev42)
    db.session.add(rev43)
    db.session.add(rev44)
    db.session.add(rev45)
    db.session.add(rev46)
    db.session.add(rev47)
    db.session.add(rev48)
    db.session.add(rev49)
    db.session.add(rev50)
    db.session.add(rev51)
    db.session.add(rev52)
    db.session.add(rev53)
    db.session.add(rev54)
    db.session.add(rev55)
    db.session.add(rev56)
    db.session.add(rev57)
    db.session.add(rev58)
    db.session.add(rev59)
    db.session.add(rev60)
    db.session.add(rev61)
    db.session.add(rev62)
    db.session.add(rev63)
    db.session.add(rev64)
    db.session.add(rev65)
    db.session.add(rev66)
    db.session.add(rev67)
    db.session.add(rev68)
    db.session.add(rev69)
    db.session.add(rev70)
    db.session.add(rev71)
    db.session.add(rev72)
    db.session.add(rev73)
    db.session.add(rev74)
    db.session.add(rev75)
    db.session.add(rev76)
    db.session.add(rev77)
    db.session.add(rev78)
    db.session.add(rev79)
    db.session.add(rev80)
    db.session.add(rev81)
    db.session.add(rev82)
    db.session.add(rev83)
    db.session.add(rev84)
    db.session.add(rev85)
    db.session.add(rev86)
    db.session.add(rev87)
    db.session.add(rev88)
    db.session.add(rev89)
    db.session.add(rev90)
    db.session.add(rev91)
    db.session.add(rev92)
    db.session.add(rev93)
    db.session.add(rev94)
    db.session.add(rev95)
    db.session.add(rev96)
    db.session.add(rev97)
    db.session.add(rev98)
    db.session.commit()


def undo_reviews():
    if environment == 'production':
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))
    db.session.commit()
