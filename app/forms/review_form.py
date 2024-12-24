from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, TextAreaField, SubmitField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, NumberRange


class PostReview(FlaskForm):
    review = TextAreaField('Review', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=0, max=5)])
    submit = SubmitField('Post Review')



# No more alerts, use a modal to show that something was delete or created or updated.
# add extra question for risky user behavior: 'are you sure you want to delete? yes? no?'
