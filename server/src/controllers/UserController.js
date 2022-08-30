// the User model represents the User table
const User = require(`../models/User`);

const login = async (req, res) => {
  res.send("Hello World")
};

const register = async (req, res) => {
  res.send("Hello World")
};

const forgot = async (req, res) => {
  res.send("Hello World")
};

// exports the methods there're inside this controller in object
module.exports = {
  login,
  register,
  forgot,
};
