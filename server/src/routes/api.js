const express = require("express");

// routes required
const testRouter = require("./test/test.router");

const api = express.Router();

// using these routes
api.use("/tests", testRouter);

module.exports = api;
