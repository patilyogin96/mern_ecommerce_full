const Brand = require("../../../models/brand");

// controller to add brand(only admin should add brand)
exports.addBrand = async (req, res, next) => {
  console.log("ReqBody", req.body);
  try {
    const title = req.body.title;
    const description = req.body.description;
    const isActive = req.body.isActive;
    // const image = req.file.filename;

    const brand = new Brand({
      title,
      description,
      isActive,
      // image,
    });
    brand
      .save()
      .then((savedBrand) => {
        return res.status(201).json({
          brand: savedBrand,
          message: "Brand added Successfully.",
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
