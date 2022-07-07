const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const testSchema = new Schema({
  title: String,
  summary: String,
  body: String,
});

// Create a model based on that schema
const Test = mongoose.model("Test", testSchema);

// export the model
module.exports = Test;
