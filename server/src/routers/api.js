const express = require("express");

// routes required
const TestRouter = require("./routes/TestRouter");

const api = express.Router();

// using these routes
api.use("/test", TestRouter);

module.exports = api;
