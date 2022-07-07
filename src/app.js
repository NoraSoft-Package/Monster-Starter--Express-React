const express = require("express");

// routes
const testRouter = require("./routes/test");

// the app
const app = express();

// parse to json
app.use(express.json());

// cors for handling http requests

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

// end cors for handling http requests

// we put the /test cause all routes have /test at the beginning
app.use("/test", testRouter);

module.exports = app;
