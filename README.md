# React Express Starter Pack

> Create full stack apps with React starter and Express. Run your client and server with a single command. 

## Quick Start

### Install dependencies for server
``` bash
npm install
```

### Install dependencies for client
``` bash
npm run client-install
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
try to delete the `route`, `model`, `controller` test files and delete this code in the server.js
```js
// delete this route code
app.use("/api", testRouter);
// and delete this require also
const testRouter = require("./routes/test");
```

### Second solution to run the application
create your db and put your link in the server.js then it will automatically create a test table and the app will work properly!.

## Some resources might help you
* [https://www.youtube.com/watch?v=v0t42xBIYIs](https://www.youtube.com/watch?v=v0t42xBIYIs)

## App Info

### Author

Mohamed Monster

### Version

2.1

