// all requires
const express = require("express");
const router = express.Router();
// the controller
const {
  index,
  create,
  getById,
  update,
  del,
} = require("../../controllers/TestController");

// ----------------
// start test section
// ----------------

router.get("/", index);
router.post("/", create);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", del);

// ----------------
// end test section
// ----------------

module.exports = router;
