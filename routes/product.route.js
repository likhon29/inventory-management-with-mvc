const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router
  .route("/")
  .get(productController.getProducts)
  .post(productController.saveProduct);

router
  .route("/:id")
  .get(productController.getAProduct)
  .post()
  .patch(productController.updateProduct)
  .delete();
module.exports = router;
