const Cart = require("../../../models/cart");
const tax = require("../../../utils/tax");

// add to cart funtionality

exports.addtoCart = async (req, res, next) => {
  // your add to cart logic

  if (req.params.cartId) {
    try {
      const product = req.body;
      const final_tax_products = tax.calculateGst([product]);

      console.log("Updatecarttax", final_tax_products[0]);

      const query = { _id: req.params.cartId };

      console.log("ReqqqPaerams update", product, query);
      await Cart.updateOne(query, {
        $push: { items: final_tax_products },
      }).exec();
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

      const final_tax_products = tax.calculateGst(items);
      console.log("TXCOTRO", final_tax_products);

      const cart = await new Cart({
        user,
        items: final_tax_products,
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
