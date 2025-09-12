from .db import db, environment, SCHEMA, add_prefix_for_prod



class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    beverage_post_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('beverage_posts.id')))
    rating = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String(225), nullable=False)


    user = db.relationship("User", back_populates='review')
    beverage_post = db.relationship('BeveragePost', back_populates='review')


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'beverage_post_id': self.beverage_post_id,
            'review': self.review,
            'rating': self.rating
        }


# schema name for all foreign keys
# ex: user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
