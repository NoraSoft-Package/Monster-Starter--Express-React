const express = require("express");

const app = express();

// server port
const port = 5000;

// body parser
const bodyParser = require("body-parser");

// cors for handling http requests

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

// cors for handling http requests

// -----------------
// start routes
// -----------------

const testRouter = require("./routes/test");

// -----------------
// end routes
// -----------------

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(bodyParser.json());

// mongos connection

// require mongoose
const mongoose = require("mongoose");

mongoose
  // in your link:
  //  delete <password> and replace it by the database password
  //  put your database name between [.net/] db name  [?]
  .connect("your_database_link")
  .then((result) => {
    app.listen(port, () => `Server running on http://localhost:${port}`);
  })
  .catch((err) => {
    console.log(err);
  });

// end mongos connection

// test routes
// we put the /api cause all routes have /api at the beginning
app.use("/api", testRouter);
