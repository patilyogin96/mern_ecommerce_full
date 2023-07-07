const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
