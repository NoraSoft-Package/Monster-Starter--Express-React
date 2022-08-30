// all requires
const express = require("express");
const router = express.Router();
// the controller
const UserController = require("../../controllers/UserController");

// ----------------
// start User section
// ----------------

router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.post("/forgot", UserController.forgot);

// ----------------
// end User section
// ----------------

module.exports = router;
