const express = require("express");
const router = express.Router();
const brandController = require("../../../controllers/api/v1/brand_api");

// only admins should add brand
router.post("/add", brandController.addBrand);

module.exports = router;
