// the Test model represents the test table
const Test = require(`../models/Test`);

// method that get all the tests from db | model
const index = (req, res) => {
  // Todo: get all the tests from test table
  res.send(process.env.ALLOWED_WEBSITE);
};

const create = (req, res) => {
  // Todo: create a test
  res.send(`Welcome in create method`);
};

const getById = (req, res) => {
  // Todo: get just one test by it's own id
  const id = req.params.id;
  res.send(`Welcome in getById method your id is: ${id}`);
};

const update = (req, res) => {
  // Todo: update a test
  const id = req.params.id;
  res.send(`Welcome in update method your id is: ${id}`);
};

const del = (req, res) => {
  // Todo: delete a test
  const id = req.params.id;
  res.send(`Welcome in delete method your id is: ${id}`);
};

// exports the methods there're inside this controller in object
module.exports = {
  index,
  create,
  getById,
  update,
  del,
};
