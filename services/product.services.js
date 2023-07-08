const Product = require("../models/Product");

exports.getProductsService = async () => {
  const products = await Product.find({});
  return products;
};

exports.createProductService = async (data) => {
  const product = await Product.create(data);
   return product;
};

exports.getAProductService = async (id) => {
  const product = await Product.findOne({ _id: id });
  return product;
};

exports.updateProductService = async (id)=>{
  
}
