const express = require("express");

const app = express();

// body parser
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(bodyParser.json());

// api routes
app.get("/api/customers", (req, res) => {
  res.send("Customers are coming...");
});

// server port
const port = 5000;

// to run the server
app.listen(port, () => `Server running on port ${port}`);
