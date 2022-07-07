// the Test model represents the test table
const Test = require("../../models/test.model");

// method that get all the tests from db | model
const index_get = (req, res) => {
  // to get all the data from "Test model" | "Test table"
  Test.find()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      // catch the error
      res.status(400).send({
        message: err.message,
      });
    });
};

// exports the methods there're inside this controller in object
module.exports = {
  index_get,
};
