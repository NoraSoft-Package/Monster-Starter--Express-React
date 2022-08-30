const express = require("express");

// routes required
const UserRouter = require("./routes/UserRouter");

const api = express.Router();

// using these routes
api.use("/local", UserRouter);

module.exports = api;
