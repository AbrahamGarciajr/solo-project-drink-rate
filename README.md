
# DrinkRate
## About
DrinkRate is a review site where the user is able to post a picture and key details about a specific drink that they would like the world to know how they feel about. Some key details would include oz of the drink, the percentage of alcohol within the drink, and other nutritional facts about the drink. On the initial post they are also given a text area where they can describe their experience with the drink, whatever that may be, along with what they would rate the drink (1-5). From there, another logged in user is allowed to leave their own review for that specific drink as well. They will be given the same options to leave a written review and a rating of 1-5.

# Link to live site
 https://drink-rate.onrender.com

# Linkedin
 https://www.linkedin.com/in/abraham-garcia-822a2a344/

### Home Page
![image](https://github.com/user-attachments/assets/4c057173-21cc-4ab4-9ef5-ae9af4b49fc8)
### A Users Drink Post
![image](https://github.com/user-attachments/assets/cfed22df-f94b-484d-923b-0bc6fbf2d09e)
### A Post's Reviews
![image](https://github.com/user-attachments/assets/1296c723-be25-426c-8ca5-df5494a2de5c)


# List of techs/languages/plugins/APIs used
### Frameworks and Libraries
Python, Flask, JavaScript, React, Redux, CSS3, HTML5

### Database
Postgres

### Hosting
Render


# To-dos/future features
* I would want to add a post feature for brands and categories so that when a user doesn't see the brand/category that matches their drink they are able to select a different option that will allow them to add a new brand/category to make their post for.
* I want to allow the updating a post feature to be able to update the image being stored in aws.
* The home page will show the 6 most recent posts, but I also want to add a filter that allows the user to search for: oldest posts, highest and lowest rating drinks.


# Endpoints
All patch, posts and deletes have @login_required and/or flask_login's current_user associated with them for proper authentication that the user is in fact the owner of the post or review and that there is a user.

 ## Auth Routes
   ### Authenticate User
   * Purpose: Checks whether the user is authenticated and returns that users information
   * Method: GET
   * URL: /api/auth/
   * Response:
```js
{
id: 1,
username: "demo-lition",
email: "demo@aa.io"
}
```
   * Error Response: Status code 401
```js
{'errors': {'message': 'Unauthorized'}}
```

   ### Login
   * Purpose: Logs in a user with the email and password combo
   * Method: POST
   * URL: /api/auth/login
   * Response:
```js
{
id: 1,
username: "demo-lition",
email: "demo@aa.io"
}
```
   * Error Response: Status code 401
```js
{'errors': 'different error messages for incorrect password or email or invalid login'}
```

   ### Logout
   * Purpose: Logout a signed in user
   * Method: GET
   * URL: /api/auth/logout
   * Response:
```js
{
'message': 'User logged out'
}
```

   ### Signup
   * Purpose: Lets a user sign up for a new account and returns new user's data
   * Method: POST
   * URL: /api/auth/signup
   * Response:
```js
{
id: 1,
username: "demo-lition",
email: "demo@aa.io"
}
```
   * Error Response: Status code 401
```js
{'errors': 'different error messages for improper email and password '}
```

   ### Unauthorized
   * Purpose: Returns unauthorized JSON when flask-login authentication fails
   * Method: GET
   * URL: /api/auth/
   * Response: 401
```js
{'errors': {'message': 'Unauthorized'}}
```


 ## Users
   ### Users
   * Purpose: Returns data for all users
   * Method: GET
   * URL: /api/users/
   * Response:
```js
{'users': [
{
id: 1,
username: "demo-lition",
email: "demo@aa.io"
},
{
id: 2,
username: "Terry",
email: "terry23@aa.io"
}
]
}
```
   ### User
   * Purpose: Returns a specific user's data
   * Method: GET
   * URL: /api/users/:userId
   * Response:
```js
{
id: 1,
username: "demo-lition",
email: "demo@aa.io"
}
```

   ### User's Posts
   * Purpose: Returns the logged in users posts they have made from newest to oldest
   * Method: GET
   * URL: /api/users/:userId/posts
   * Response:
   ```js
      [
   {
   alc: "4.0000000000",
   brand_id: 1,
   cal: 4,
   carbs: "4.0000000000",
   category_id: 2,
   desc: "jgfkjgsfg",
   id: 32,
   img: "http://drinkrate.s3.amazonaws.com/22e12d1afa18450c8d18dbbb0e36114b.png",
   name: "sdkhfbskgjbsdf",
   oz: "5.0000000000",
   rating: 4,
   sodium: "4.0000000000",
   user_id: 1
   },
   {
   alc: "40.0000000000",
   brand_id: 10,
   cal: 50,
   carbs: "14.0000000000",
   category_id: 3,
   desc: "I saw that post about passion fruit so I got this one instead. Def recommend!",
   id: 30,
   img: "https://cdn11.bigcommerce.com/s-ryneghvxt8/images/stencil/original/products/4031/3844/SKYY-Agave_Lime-750_ml__79695.1697653614.jpg",
   name: "Skyy agave lime",
   oz: "25.0000000000",
   rating: 4,
   sodium: "4.0000000000",
   user_id: 1
   }, ...]
      ```

   ## Drinks
      ### Recent Drinks
      * Purpose: Returns a list of all the drinks from recent to oldest post
      * Method: GET
      * URL: /api/drinks/
      * Response:
   ```js
   [
   {
   id: 23,
   user_id: 3,
   brand_id: 1,
   category_id: 2,
   name: 'modelo',
   img: 'https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
   oz: 20,
   alc: 4.4,
   rating: 3,
   cal: 120,
   carbs: 23,
   sodium: 23,
   desc: 'This is a generic desc filler for this readme'
   },
   {
   id: 22,
   user_id: 3,
   brand_id: 1,
   category_id: 2,
   name: 'modelo',
   img: 'https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
   oz: 20,
   alc: 4.4,
   rating: 3,
   cal: 120,
   carbs: 23,
   sodium: 23,
   desc: 'This is a generic desc filler for this readme'
   }
   ]
```
   * Error Response: Message for when there are no drinks posted
```js
{'message': 'There are currently no drinks posted'}
```

   ### All Categories
   * Purpose: Gets all of the categories
   * Method: GET
   * URL: /api/drinks/categories
   * Response:
```js
[
{
'id': 1,
'name': 'Wine'
},
{
'id': 2,
'name': 'Beer'
},
{
'id': 3,
'name': 'Vodka'
}
]
```
   ### Category Selection
   * Purpose: For when a user selects a category of beverages it will return a list of all the brands associated with that category
   * Method: GET
   * URL: /api/drinks/categories/:categoryId
   * Response:
```js
[
{
'id': 1,
'name': 'Modelo'
},
{
'id': 2,
'name': 'Franzia'
},
{
'id': 3,
'name': 'Ciroc'
}
]
```
   * Error Response:
```js
{'error': 'There are no categories just yet'} 404
{'error': 'There are no brands for this category just yet'} 404
```
   ### Brand Selection
   * Purpose: For when a user selects a brand of beverages, it will return a list
    of all the beverage posts under that brand
   * Method: GET
   * URL: /api/drinks/brands/:brandId
   * Response:
```js
[
{
id: 1,
user_id: 3,
brand_id: 1,
category_id: 2,
name: 'modelo',
img: 'https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
oz: 20,
alc: 4.4,
rating: 3,
cal: 120,
carbs: 23,
sodium: 23,
desc: 'This is generic filler info for this readme'
},
{
id: 2,
user_id: 3,
brand_id: 1,
category_id: 2,
name: 'modelo',
img: 'https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
oz: 20,
alc: 4.4,
rating: 3,
cal: 120,
carbs: 23,
sodium: 23,
desc: 'This is generic filler info for this readme'
}
]
```
   * Error Response:
```js
{'error': 'No Drinks are available for this brand yet'} 404
{'error': 'there is no such brand just yet'} 404
```

   ### Selected Drink
   * Purpose: When a drink is selected then it provides all
    the details and reviews for that drink
   * Method: GET
   * URL: /api/drinks/:drinkId
   * Response:
```js
{
id: 1,
user_id: 3,
brand_id: 1,
category_id: 2,
name: 'modelo',
img: 'https://www.shutterstock.com/image-photo/marinettewiusaaug12019-single-bottle-bud-light-600nw-1469572235.jpg',
oz: 20,
alc: 4.4,
rating: 3,
cal: 120,
carbs: 23,
sodium: 23,
desc: 'This is generic filler info for this readme'
}
```
   * Error Response:
```js
{'error': 'How did you get here? A post for this drink does not exist'} 404
```
   ### Update Drink
   * Purpose: Update a drink post only if it
    is owned by the user
   * Method: PATCH
   * URL: /api/drinks/:drinkId
   * Response:
```js
{'message': 'Your post was update'}
```
   * Error Response:  @login_required and flask current_user utilized to secure there is a user and that they own that post
```js
{'error': 'Various errors will be listed here if there was incorrect data or no data sent to patch'} 400
```
   ### Delete Drink
   * Purpose: Delete a drink post only if it
    is owned by the user
   * Method: GET
   * URL: /api/drinks/:drinkId
   * Response:
```js
{'message': 'Your post has been deleted'}
This will also redirect to that post the user just made
```
   * Error Response:
```js
{'error': 'How did you get here? You need to be logged in to delete YOUR post'} 401
```
   ### Create Drink
   * Purpose: This is for creating a drink post
   * Method: POSt
   * URL: /api/drinks/post-drink
   * Response:
```js
{'message': 'Your post was created'}
```
   * Error Response: I placed required tags in the frontend jsx form so that the users will always be required to fill in the data
```js
{'error': 'The brand does not match the category of drink'} 400
{"errors": "Invalid file type"} 400
{'error': 'Please log in or create an account in order to post your drink'} 401
```
 ## Reviews
   ### Post Review
   * Purpose: This is to make a review when selecting a post that doesn't belong to the user
   * Method: POST
   * URL: /api/reviews/:postId
   * Response:
```js
{'message': 'Your review was created'}
```
   * Error Response:
```js
{'error': 'The rating has to be a whole number between 1-5'} 401
{'error': 'You already have a review for this post'} 403
{'error': 'You cannot leave a review for your own drink'} 400
{'error': 'There is no post for you to make a review for'}, 404
{'error': 'Please log in or create an account in order to post your drink'}, 401
```
 ### Update Review
   * Purpose: This is to update the users review
   * Method: PATCH
   * URL: /api/reviews/user/:revId
   * Response:
```js
{'message': 'The review has been updated'}
```
   * Error Response:
```js
{'error': 'The rating has to be a whole number between 1-5'} 401
{'error': 'This review does not belong to you'} 403
{'error': 'There is no review found'} 404
```

 ### Delete Review
   * Purpose: This is to delete the users review
   * Method: DELETE
   * URL: /api/reviews/user/:revId
   * Response:
```js
{'message': 'Your review has been deleted'}
```
   * Error Response:
```js
{'error': 'This review does not belong to you'}, 403
{'error': 'There is no review found'}, 404
```
