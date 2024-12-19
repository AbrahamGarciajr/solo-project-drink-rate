from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, TextAreaField, SubmitField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, NumberRange


class PostReview(FlaskForm):
    drink_id = IntegerField('Drink', validators=[DataRequired()])
    review = TextAreaField('Review', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=0, max=5)])
    submit = SubmitField('Post Review')
