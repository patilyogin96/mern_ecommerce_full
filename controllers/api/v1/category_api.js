const Category = require("../../../models/category");
const path = require("path");
const fs = require("fs");
const uploadsFolder = path.join(__dirname, "..", "..", "..", "uploads");

// controller code to add category
exports.addCategory = async (req, res, next) => {
  console.log("ReqBodyCate", req.file);

  try {
    const title = req.body.title;
    const description = req.body.description;
    const isActive = req.body.isActive;
    const image = req.file.filename;

    // validate the required fields
    // create instance of category and save it

    const category = await new Category({
      title,
      description,
      isActive,
      image,
    });

    category
      .save()
      .then((cat) => {
        console.log("CategoryResponse", cat);
        res.status(200).json({
          success: true,
          message: "Category has been created.",
          category: cat,
        });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    return res.status(400).json({
      error,
    });
  }
};

//get/fetch categories
exports.getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await Category.find({});

    res.status(200).json({
      categories: allCategories,
    });
  } catch (error) {
    console.log(error);
  }
};
