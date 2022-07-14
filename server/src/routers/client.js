const express = require("express");
const path = require("path");

const client = express.Router();

// ------------------------- React Route --------------------------------------
// React Route, we must put the React route at the bottom/under node's routes
// uncomment the codes below
client.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "..", "public", "index.html"));
});
// uncomment the codes top
// React Route, we must put the React route at the bottom/under node's routes
// ------------------------- React Route --------------------------------------

module.exports = client;
