const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new mongoose.Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    trim: true, //study
  },
  description: {
    type: String,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
