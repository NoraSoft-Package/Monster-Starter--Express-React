# React Express Starter Pack

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

### Run the Express server only
``` bash
npm run server
```

### Run the React client only
``` bash
npm run client
```

> Server runs on http://localhost:5000 and client on http://localhost:3000

## Don't forget!!
the app have a fake controller, model, route for just explain or remember the codes.

### First solution to run the application
create your db and put your link in the server.js then it will automatically create a test table and the app will work properly!.
```js
const db_link = "put_your_link";
```

### Second solution to run the application
try to delete the `route`, `model`, `controller` test files and delete this code in the server.js
```js
// delete this route code
app.use("/api", testRouter);

// and delete this require also
const testRouter = require("./routes/test");

// then in server.js file add your link of your database to connect to the server
const db_link = "put_your_link";
```


## Production Time
* you can write in your cmd `npm run build`, then the react application will
  build for production in server/public

* after that, you must uncomment these lines of code in the app.js file
``` js
// uncomment this line of code
app.use(express.static(path.join(__dirname, "..", "public")));
```
also uncomment these lines of code
```js
// ------------------------- React Route --------------------------------------
// React Route, we must put the React route at the bottom/under node's routes
// uncomment the codes below
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
// uncomment the codes top
// React Route, we must put the React route at the bottom/under node's routes
// ------------------------- React Route --------------------------------------
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

v3