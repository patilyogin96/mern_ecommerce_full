const express = require("express");
const router = express.Router();
const categoryController = require("../../../controllers/api/v1/category_api");
const auth = require("../../../middleware/auth");
const role = require("../../../middleware/role");
const passport = require("passport");
const multer = require("multer"); //importing multer for file upload

const storage = multer.diskStorage({
  destination: "uploads/", // Specify the folder where uploaded files will be stored
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for each uploaded file
  },
});

const upload = multer({ storage: storage });

console.log("Auth", auth);

const { ROLES } = require("../../../constants/index");
const { session } = require("passport");

router.post(
  "/add",
  auth,
  role.check(ROLES.ADMIN),
  upload.single("file"),
  categoryController.addCategory
);

router.get("/", categoryController.getAllCategories);

module.exports = router;
