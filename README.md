# Monster Starter Express React v6

> Create full stack apps with [React Starter](https://github.com/Monster-Library/Monster_Starter__React) and Express. Run,Install,Update your client and server with a single command.

## Quick Start


### Install dependencies for all [ **Required** ]
``` bash
npm run i
```

### Update dependencies for all [ **Optional** ]
``` bash
npm run update
```

### Install dependencies for just client [ **Optional** ]
``` bash
npm run client-install
```

### for production
``` bash
npm run build
```

### Run the client & server with concurrently
``` bash
npm run dev
```

### Run the client native with the web & server with concurrently
``` bash
npm run web
```

### Run the Express server only
``` bash
npm run server
```

### Run the React client only
``` bash
npm run client
```

> Server runs on http://localhost:5000 and client on http://localhost:3000

> Use ngrok to convert the backend localhost from localhost:5000 to https to run this app on android or iPhone device

> When using react native the web can't dealing with ngrok link because the cors error but the web can deal with localhost:5000 on the other hand the android or iphone devices apps can't deal with localhost:5000 because it's a `http` not `https` because that we're using ngrok to change the url of the backend to https.

## Some Features

* `server.js` file is made to run the server

* `app.js` file is made to run all the codes the app need it

* `routes/api.js` file is made to contains all the API routes in your application

* `route/client.js` file tells to the server to lets the app run your public folder as a frontend to your application [learn more](#production-time)

* `server/.env` file all the secrets of your server will be there

* `client/.env` file all the secrets of your app will be there

## Don't forget!!
the app have a fake `controller`, `model`, `route` for just explain or remember the codes.

### First solution to run the application
create your db and put your link in the server.js then it will automatically create a test table and the app will work properly!.

* in client/ rename .env.example file to .env file, then write the api path here or the backend API url in .env file
```js
REACT_APP_API_URL=your_api_url
```

* in server/ rename .env.example file to .env file, then write your database link in .env file
```js
DB_URL=your_db_link
```

### Second solution to run the application
try to delete the `route`, `model`, `controller` test files and delete this code in the server.js
```js
// delete this route code server/src/routes/api.js file
app.use("/tests", testRouter);

// delete this require server/src/routes/api.js file
const testRouter = require("./routes/test");
```

in client/ rename .env.example file to .env file, then write the api path here or the backend API url in .env file
```js
REACT_APP_API_URL=your_api_url
```

in server/ rename .env.example file to .env file, then write your database link in .env file
```js
DB_URL=your_db_link
```

if you're using `React Native` not just `ReactJS` please go to the api/API_Handler.js method and put the backend urls for the phone and the web
```js
// the web backend url
const webURL = "http://localhost:5000/api";
// the phone backend url
const phoneURL = "https://e60c-197-37-119-159.eu.ngrok.io/api";
```

## Production Time
* you can write in your cmd `npm run build`, then the react application will
  build for production in server/public

* after that, you must uncomment these lines of code in the app.js file
``` js
// uncomment this line of code
app.use(express.static(path.join(__dirname, "..", "public")));
```

* require path in the app.js file
```js
const path = require("path");
```

* uncomment these requires in the app.js file
```js
// required routes
const client = require("./routes/client/client.router");
// required routes
```

* uncomment these lines of code in the app.js file
```js
// the client route
app.use(client);
```

* then run in the cmd `npm run server` to test the server before publishing the server and the react application on a one [domain, host]

## Some resources might help you
* [https://www.youtube.com/watch?v=v0t42xBIYIs](https://www.youtube.com/watch?v=v0t42xBIYIs)

## App Info

### Author

Mohamed Monster

[My Portfolio](https://mohamed--monster.web.app/)

[My GitHub](https://github.com/Monster-Mohamed)

### Version

v6