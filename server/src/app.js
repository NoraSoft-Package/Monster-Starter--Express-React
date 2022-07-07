const express = require("express");

// routes
const testRouter = require("./routes/test/test.router");

// the app
const app = express();

/**
 * cors for handling CORS ERROR
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */

var cors = require("cors");

app.use(cors({
    // the domain is allowed
    origin: "http://localhost:3000"
    // you can also add multible domains see more in the docs
})); // Use this after the variable declaration

// end cors for handling http requests

// parse to json
app.use(express.json());

// we put the /test cause all routes have /test at the beginning
app.use("/test", testRouter);

module.exports = app;
