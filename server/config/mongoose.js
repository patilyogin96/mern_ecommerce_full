const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://96yoginpatil:96yogin@cluster0.xezchgk.mongodb.net/ecommerce"
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;

// togoenvvariabe
