from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, TextAreaField, SubmitField, FloatField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired, NumberRange
from flask_wtf.file import FileAllowed, FileRequired, FileField
from app.api.aws_s3 import ALLOWED_EXTENSIONS


class PostDrink(FlaskForm):
    brand = SelectField('Brands', coerce=int,validators=[InputRequired()])
    category = SelectField('Categories', coerce=int, validators=[InputRequired()])
    name = StringField('Drink Name', validators=[DataRequired()])
    img = FileField('Photo', validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    oz = IntegerField('OZ', validators=[DataRequired()])
    alc = FloatField('Alc %', validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=0, max=5)])
    cal = IntegerField('Calories', validators=[DataRequired()])
    carbs = IntegerField('Carbs', validators=[DataRequired()])
    sodium = IntegerField('Sodium', validators=[DataRequired()])
    desc = TextAreaField('Description', validators=[DataRequired()])
    submit = SubmitField('Create Drink')
