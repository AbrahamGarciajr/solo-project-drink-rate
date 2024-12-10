from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class Category(db.Model):
    __tablename__ = 'categories'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(225), nullable=False)

    beverage_post = db.relationship("BeveragePost", back_populates='category')
    brand = db.relationship("Brand", back_populates='category')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name
        }


# schema name for all foreign keys
# ex: user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
