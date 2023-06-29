const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require('./config/mongoose')
const routes = require("./routes")
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(routes)



app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
}); 
