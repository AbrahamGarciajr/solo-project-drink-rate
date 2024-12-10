from .db import db, environment, SCHEMA, add_prefix_for_prod
# from werkzeug.security import generate_password_hash, check_password_hash
# from flask_login import UserMixin


class BeveragePost(db.Model):
    __tablename__ = 'beverage_posts'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    brand_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('brands.id')))
    category_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('categories.id')))
    name = db.Column(db.String(50), nullable=False)
    img = db.Column(db.String(255), nullable=False)
    oz = db.Column(db.Numeric, nullable=False)
    alc = db.Column(db.Numeric, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    cal = db.Column(db.Integer, nullable=False)
    carbs = db.Column(db.Numeric, nullable=False)
    sodium = db.Column(db.Numeric, nullable=False)
    desc = db.Column(db.Text, nullable=True)


    user = db.relationship("User", back_populates='beverage_post')
    brand = db.relationship('Brand', back_populates='beverage_post')
    category = db.relationship('Category', back_populates='beverage_post')
    review = db.relationship("Review", back_populates="beverage_post", cascade="all, delete-orphan")



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'brand_id': self.brand_id,
            'category_id': self.category_id,
            'name': self.name,
            'img': self.img,
            'oz': self.oz,
            'alc': self.alc,
            'rating': self.rating,
            'cal': self.cal,
            'carbs': self.carbs,
            'sodium': self.sodium,
            'desc': self.desc
        }


# schema name for all foreign keys
# ex: user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
