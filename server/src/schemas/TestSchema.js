const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const TestSchema = new Schema({
  title: String,
  summary: String,
  body: {
    type: String,
    required: [true, "the body is required"],
    min: 10,
    max: 300,
  },
});

module.exports = TestSchema;
