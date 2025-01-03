from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class Brand(db.Model):
    __tablename__ = 'brands'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(225), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')))

    beverage_post = db.relationship("BeveragePost", back_populates='brand')
    category = db.relationship("Category", back_populates='brand')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'category_id': self.category_id
        }
