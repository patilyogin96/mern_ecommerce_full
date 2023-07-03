const express = require("express");
const passport = require("passport");
const multer = require("multer"); //importing multer for file upload
const cors = require("cors");
const path = require("path");
const db = require("./config/mongoose");
const routes = require("./routes");
const app = express();
const port = 8000;

require("./config/passport")(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: "uploads/", // Specify the folder where uploaded files will be stored
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for each uploaded file
  },
});

const upload = multer({ storage: storage });

app.use(routes);

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
