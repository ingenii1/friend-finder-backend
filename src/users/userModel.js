const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  activity: {
    type: String,
    required: false,
  },
  activityDescription: {
    type: String,
    required: false,
  },
  interests: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
