const mongoose = require("mongoose");
const TestSchema = require("../schemas/TestSchema");

// Create a model based on that schema
const Test = mongoose.model("Test", TestSchema);

// export the model
module.exports = Test;
