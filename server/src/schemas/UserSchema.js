const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the User)
const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  country: String,
  zip_code: Number,
});

module.exports = UserSchema;
