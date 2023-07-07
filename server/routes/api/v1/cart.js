const express = require("express");
const router = express.Router();
const cartController = require("../../../controllers/api/v1/cart_api");
const auth = require("../../../middleware/auth");

// add to cart is based on two condition- 1-if cart not created-create fresh cart ,2-if already created update existing cart
router.post("/add", auth, cartController.addtoCart);
router.post("/add/:cartId", auth, cartController.addtoCart);

module.exports = router;
