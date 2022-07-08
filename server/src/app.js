const express = require("express");
const path = require("path");

// routes
const testRouter = require("./routes/test/test.router");

// the app
const app = express();

/**
 * cors for handling CORS ERROR
 * CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
 */

var cors = require("cors");

app.use(
  cors({
    // the domain is allowed
    origin: "http://localhost:3000",
    // you can also add multible domains see more in the docs
  })
); // Use this after the variable declaration

// end cors for handling http requests

// parse to json
app.use(express.json());

// for just a production
// app.use(express.static(path.join(__dirname, "..", "public")));

// we put the /test cause all routes have /test at the beginning
app.use("/api/test", testRouter);

// ------------------------- React Route --------------------------------------
// React Route, we must put the React route at the bottom/under node's routes
// uncomment the codes below
/**
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
}); 
**/
// uncomment the codes top
// React Route, we must put the React route at the bottom/under node's routes
// ------------------------- React Route --------------------------------------

module.exports = app;
