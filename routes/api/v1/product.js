const express = require("express");
const router = express.Router();
const productController = require("../../../controllers/api/v1/product_api");

// add product - only admin should add product
router.post("/add", productController.addProduct);

module.exports = router;
