// all requires
const express = require("express");
const router = express.Router();
// the controller
const TestController = require("../../controller/test.controller");

// ----------------
// start test section
// ----------------

router.get("/", TestController.index_get);

// ----------------
// end test section
// ----------------

module.exports = router;
