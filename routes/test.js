// all requires
const express = require("express");
const router = express.Router();

// ----------------
// start test section
// ----------------

router.get("/customers", (req, res) => {
  res.send("Customers are coming...");
});

// ----------------
// end test section
// ----------------

module.exports = router;
