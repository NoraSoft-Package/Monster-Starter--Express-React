const express = require("express");

const app = express();

// server port
const port = 5000;

// body parser
const bodyParser = require("body-parser");

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

const mongoose = require("mongoose");

// in your db link
//   delete <password> and replace it by the database password
//   put your database name between [.net/] db name  [?]

mongoose
  .connect("your link")
  .then((result) => {
    app.listen(port, () => `Server running on port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });

// end mongos connection

// test routes
// we put the /api cause all routes have /api at the beginning
app.use("/api", testRouter);

// to run the server
app.listen(port, () => `Server running on port ${port}`);
