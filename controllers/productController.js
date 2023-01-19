const Product = require("../models/productModel.js");

// get all the products
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get product by id
const getSingleProduct = async (req, res) => {
  const { id:id } = req.params;
  try {
    const product = await Product.findOne({ _id: id });
    if (!product) {
      res.send("no product with this id");
    } else{
        res.status(200).json(product);
    }
    
    
  } catch (err) {
    res.status(500).json(err);
  }
};

// create product
const createProduct = async (req, res) => {
  const { name, quantity, departments } = req.body;
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update product
const updateProduct = async (req, res) => {
  const { id:id } = req.params;
  const { name, quantity, departments } = req.body;

  try {
    const product = await Product.findOneAndUpdate({ _id: id }, req.body);
    if (!product) {
      res.send("no product with thid id");
    } 
      res.status(200).json(product);
   
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete product

const deleteProduct = async (req, res) => {
  const { id:id } = req.params;
  try {
    const product = await Product.deleteOne({ _id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
