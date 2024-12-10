from app.models import db, environment, SCHEMA, Brand
from sqlalchemy.sql import text


def seed_brands():
    modelo = Brand(name='Modelo',category_id=2)
    corona = Brand(name='Corona',category_id=2)
    budLight = Brand(name='Bud Light',category_id=2)
    franzia = Brand(name='Franzia', category_id=1)
    barefoot = Brand(name='Barefoot', category_id=1)
    yellowTail = Brand(name='Yellow Tail', category_id=1)
    ciroc = Brand(name='Ciroc', category_id=3)
    tito = Brand(name='Tito', category_id=3)
    skyy = Brand(name='Skyy', category_id=3)
    buchanan = Brand(name='Buchanan', category_id=4)
    jameson = Brand(name='Jameson', category_id=4)

    db.session.add(modelo)
    db.session.add(franzia)
    db.session.add(ciroc)
    db.session.add(buchanan)
    db.session.add(corona)
    db.session.add(franzia)
    db.session.add(budLight)
    db.session.add(barefoot)
    db.session.add(yellowTail)
    db.session.add(tito)
    db.session.add(skyy)
    db.session.add(jameson)
    db.session.commit()


def undo_brands():
    if environment == 'production':
        db.session.execute(f"TRUNCATE table {SCHEMA}.brands RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM brands"))
    db.session.commit()
