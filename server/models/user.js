const mongoose = require("mongoose");
const { ROLES } = require("../constants");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: ROLES.MEMBER,
    enum: [ROLES.ADMIN, ROLES.MEMBER],
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
