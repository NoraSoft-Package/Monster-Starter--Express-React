const mongoose = require("mongoose");
const UserSchema = require("../schemas/UserSchema");

// Create a model based on that schema
const User = mongoose.model("User", UserSchema);

// export the model
module.exports = User;
