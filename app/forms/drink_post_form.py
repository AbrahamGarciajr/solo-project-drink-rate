from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, TextAreaField, SubmitField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, NumberRange


class PostDrink(FlaskForm):
    brand = SelectField('Brands', coerce=int,validators=[InputRequired()])
    category = SelectField('Categories', coerce=int, validators=[InputRequired()])
    name = StringField('Drink Name', validators=[DataRequired()])
    img = StringField('Photo', validators=[DataRequired()])
    oz = IntegerField('OZ', validators=[DataRequired()])
    alc = FloatField('Alc %', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=0, max=5)])
    cal = IntegerField('Calories', validators=[DataRequired()])
    carbs = IntegerField('Carbs', validators=[DataRequired()])
    sodium = IntegerField('Sodium', validators=[DataRequired()])
    desc = TextAreaField('Description', validators=[DataRequired()])
    submit = SubmitField('Create Drink')
