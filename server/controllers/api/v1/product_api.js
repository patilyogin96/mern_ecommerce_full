const Product = require("../../../models/product");

// controller to add product
exports.addProduct = async (req, res, next) => {
  console.log("ProductReqBody" , req.body);
  try {
    const title = req.body.title;
    const description = req.body.description;
    const isActive = req.body.isActive;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const brand = req.body.brand;
    // const image = req.file.filename;
    // handle validations and error

    // create the product and save and send response
    const product = new Product({
      title,
      description,
      isActive,
      quantity,
      price,
      brand,
    });

    product
      .save()
      .then((savedProduct) => {
        return res.status(201).json({
          Product: savedProduct,
          message: "Product added Successfully.",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          err,
          message: "Coud not process request.",
        });
      });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};
