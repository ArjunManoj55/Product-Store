import Product from "../models/product.js";
import mongoose from "mongoose";

// POST - Create a new product
export const postProduct = async (req, res) => {
  const product = req.body; // Extract product data from request body

  // Validate input fields
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({
      success: false,
      message: "❌ Please enter name, price, and image for the product.",
    });
  }

  try {
    // Create a new product document using the Product model
    const newProduct = new Product(product);

    // Save the new product to the MongoDB database
    await newProduct.save();

    // Send back success response
    res.status(201).json({
      success: true,
      message: "✅ Product added successfully!",
      data: newProduct,
    });
  } catch (error) {
    // Handle error if saving fails
    res.status(500).json({
      success: false,
      message: "❌ Something went wrong while saving the product.",
      error: error.message,
    });
  }
};

// DELETE - Delete a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "product deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "deletion failed",
    });
  }
};

// GET - Fetch all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      message: "products in DB",
      data: products,
    });
  } catch (error) {
    console.log("error in fetching products");
    res.status(500).json({
      success: false,
      message: "cant fetch",
    });
  }
};

// PUT - Update product by ID
export const putProducts = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  // If passed ID is not valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      success: false,
      message: "pass a valid id",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "can't update",
    });
  }
};
