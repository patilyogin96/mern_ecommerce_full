const Cart = require("../../../models/cart");

// add to cart funtionality

exports.addtoCart = async (req, res, next) => {
  // your add to cart logic

  if (req.params.cartId) {
    try {
      const product = req.body;

      const query = { _id: req.params.cartId };
      console.log("ReqqqPaerams update", product, query);
      await Cart.updateOne(query, { $push: { items: product } }).exec();
      return res.status(200).json({
        message: "CartUpdated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  } else {
    // console.log("Fresh");
    try {
      const user = req.user._id;
      const items = req.body.products;

      const cart = await new Cart({
        user,
        items,
      });

      const finalCart = await cart.save();

      return res.status(201).json({
        message: "Added to cart",
        finalCart,
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};
