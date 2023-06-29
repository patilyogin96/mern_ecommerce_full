const express = require("express");
const router = express.Router();
const categoryController = require("../../../controllers/api/v1/category_api");
const auth = require("../../../middleware/auth");
const role = require("../../../middleware/role");
const passport = require("passport");

console.log("Auth", auth);

const { ROLES } = require("../../../constants/index");
const { session } = require("passport");

router.post(
  "/add",
  auth,
  role.check(ROLES.ADMIN),
  categoryController.addCategory
);

module.exports = router;
