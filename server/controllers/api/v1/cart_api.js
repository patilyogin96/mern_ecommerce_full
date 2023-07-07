const Cart = require("../../../models/cart");
const tax = require("../../../utils/tax");
const store = require("../../../utils/store");

// add to cart funtionality

exports.addtoCart = async (req, res, next) => {
  // your add to cart logic

  // if block shall execute code to addd product to existing cart
  if (req.params.cartId) {
    try {
      const product = req.body;
      const final_tax_products = tax.calculateGst([product]);

      const query = { _id: req.params.cartId };

      await Cart.updateOne(query, {
        $push: { items: final_tax_products },
      }).exec();

      const newCart = await Cart.findOne(query).exec();

      const cartCalculations = store.finalCartCalculatons(newCart.items);

      await Cart.updateOne(query, {
        $set: {
          total_cart_price: cartCalculations.total_cart_price,
          total_cart_tax: cartCalculations.total_cart_tax,
        },
      }).exec();

      return res.status(200).json({
        message: "CartUpdated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    // add product to fresh cart
    try {
      const user = req.user._id;
      const items = req.body.products;

      const final_tax_products = tax.calculateGst(items);
      const cartCalculations = store.finalCartCalculatons(final_tax_products);
      console.log("TXCOTRO", final_tax_products, cartCalculations);

      const cart = await new Cart({
        user,
        items: final_tax_products,
        total_cart_price: cartCalculations.total_cart_price,
        total_cart_tax: cartCalculations.total_cart_tax,
      });

      const finalCart = await cart.save();

      return res.status(201).json({
        message: "Added to cart",
        finalCart,
        total_cart_price: cartCalculations.total_cart_price,
        total_cart_tax: cartCalculations.total_cart_tax,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
