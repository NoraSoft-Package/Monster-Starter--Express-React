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
router.get("/tests/:id", getById);
router.put("/:id", update);
router.delete("/:id", del);
//test the .env file
router.get("/test_env_file", (req, res) => {
  res.send(
    `Welcome in .env file your allowed website is: ${process.env.ALLOWED_WEBSITE}`
  );
  // Todo see this test in this link http://localhost:5000/api/test/test_env_file
});
// ----------------
// end test section
// ----------------

module.exports = router;
