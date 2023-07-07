const express = require("express");
const router = express.Router();
const authController = require("../../../controllers/api/v1/auth_api");

router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);
module.exports = router;
