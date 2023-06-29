const express = require("express");
const router = express.Router();
const categoryController = require("../../../controllers/api/v1/category_api");
const role = require("../../../middleware/role");
const { ROLES } = require("../../../constants/index");

router.post("/add", role.check(ROLES.ADMIN), categoryController.addCategory);

module.exports = router;
