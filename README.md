WHere is the request part (GET, POST, PATCH, PUT) in the controllers requestwhich seem like routers?
Do the routers from made as imports of controller function are having them instead?

# Rest API

Rest API example to practice

Create a Express server that handles:

- A `GET` request endpoint at `/` as a landing page for your API.
- A `GET` request endpoint at `/user` to display all users in DB.
- A `POST` request endpoint at `/user` to add new user to DB.
- A `PUT` request endpoint at `/user/:name` to update user from DB upon their name.
- A `PATCH` request endpoint at `/user/:name` to update some user data from DB upon their name.
- A `GET` request endpoint at `/display/:name` to display one user from DB upon their name.

```javascript
// GET all
app.get("/");
// POST add new one
app.post("/");
// GET one by ID
app.get("/:id");
// patch one
app.patch("/:id");
// delete one
app.delete("/:id");
```

New user endpoint should be able to accept a JSON object like the following:

```json
{
  "userName": "steel",
  "userPass": "123pass",
  "age": "32",
  "fbw": "48",
  "toolStack": ["Js", "Html5", "Css3", "Sass"],
  "email": "contact@steel.eu"
}
```

## For the endpoint `/user` that adds new user

- Create a middleware method that will make sure the object received contains `userName`, `userPass`, `age`, `fbw` and `email`.
- Create a middleware method that will check if the user is above 18 years old
- Create a middleware method that will check if the user belongs to our FBW
- If all the above is true, then you should send a response with a success message
- If any of the middleware fails, you should send a response with an error message that says why the user is not valid.

#### EXAMPLE RESPONSES

```json
// Success case
{
  "message" : "This user is valid!"
}


// Failure
{
  "message": "We can not validate your user. They are not a member of FBW48"
}


// Other case of Failure
{
  "message": "We can not validate your user. we don't accept pp that are below 18 years of age"
}

```

## For the `/display/:name` endpoint:

- Create a middleware that makes the `firstName` starts with a capital letter.
- Create a middleware that sorts the `toolStack` array alphabetically.
- Create a middleware that will turn `age` and `fbw` to numbers.

#### EXAMPLE RESPONSES

```json
{
  "userName": "Steel",
  "userPass": "123pass",
  "age": 32,
  "fbw": 48,
  "toolStack": ["Css3", "Html5", "Js", "Sass"],
  "email": "contact@steel.eu"
}
```

Make sure that you Organize (route, controller and module)
Ps: our new Rest API needs new DB 😉

Happy coding ☘️

## Local MongoDB database speaking with local server

First local database created with mongodb and express.

To start new express project

```
npm init -y
```

Than create .env file to tell your server on which port to listen and what is the name of a database

```
echo "PORT=5000" > .env
echo "node_modules/" > .gitignore
```

Dependencies required for express handling database

```
npm i express
npm i dotenv
npm i morgan
npm i mongoose
npm i nodemon --save-dev
```

Now you can create some structure of your working directory. Server.js will start the server and ensure that ll be listening to the changes. App.js imports express to start to use .use() method and than grabs morgan library with its dev method, to create development mode additional infos. .json() method, originating from express will translate incoming json object into javascript.

```
touch server.js app.js
mkdir router model
touch router/employees.js
touch model/employeesModel.js
```

Let's take care for some scripts from package.json. Server.js will be a default file to start the app.

```
"start": "nodemon server.js"
```

## PUT

entire document for specific person

## PATCH

updates

Display what I have in my database, to print it out however I want.

## lowercase

you always store lowercase, not the crazy stuff

## Middleware

Schema
entered username, pass, age, email- check if they were entered

## ANother middleware

multiple middleware

- over 18 - you re too young
- belongs to 48- and tell - you are not belonging here

First than I will be able to add them to

If a middleware will fail in any stage

## Combined names

- two surnames

##

create a middleware that turn age and fbw into number- but postman will never show it even if its a number,

7 middlewares

## Router

Every route in different file
Root route- welcome
2 routes- user and sdisplay- 2 seperate files - user.js and handle them all the user routes,

other multiple routes,
nested routes (like search)

User - root -
userController is an object, and getAllUsers is a method (lives in controller userController)
=>exporting an object and importing it with its method

```javascript
.get(userController.getAllusers);
```

creating and initialiazing empty object

```javascript
const userController = {};
```

.find will always come back with an arreay of documents
.findOne- commes back with one specific document which it met as the first one

Middlewares in user- more, more complex middlewares will make more secure application.
importing by this way, will tell the module to search any index.js iside that directory

```javascript
require("../middleware/");
```

Age check grabbed from req.body., parseInt(age, 10)<...

## Model

Trim everything besides password, leave it as has been passed. In the near future we will be encrypting it, so it doesn't get viewed.

Some important code chunks:

res.user = ... => fillimg the response object

change by whatever has been passed || or keep the old database

option:
new:true
than I send true as an option- i want to show the updated version

time stamp - ifyou like
findby, find and update options have a save build in
