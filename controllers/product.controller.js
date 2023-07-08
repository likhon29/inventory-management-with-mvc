const {
  getProductsService,
  createProductService,
  getAProductService,
} = require("../services/product.services");

module.exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();
    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can not get data",
      error: error.message,
    });
  }
};

module.exports.saveProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);

    res.status(200).json({
      status: "success",
      messgae: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Data is not inserted ",
      error: error.message,
    });
  }
};

exports.getAProduct = async (req, res, next) => {
  try {
    const product = await getAProductService(req.params.id);
    res.status(200).json({
      status: "success",
      messgae: "Found the product successfully!",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can not get data",
      error: error.message,
    });
  }
};

exports.updateProduct = async(req,res,next)=>{
  try {
    const {id}=req.params;

    const result = await Product.updateOne({_id:id},{$set: req.body})
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "could not update product data",
      error: error.message,
    });
  }
}
