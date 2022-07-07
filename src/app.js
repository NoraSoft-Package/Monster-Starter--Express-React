const express = require("express");

// routes
const testRouter = require("./routes/test/test.router");

// the app
const app = express();

// parse to json
app.use(express.json());

/**
 * cors for handling CORS ERROR
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */

var cors = require("cors");

app.use(cors()); // Use this after the variable declaration

// end cors for handling http requests

// we put the /test cause all routes have /test at the beginning
app.use("/test", testRouter);

module.exports = app;
