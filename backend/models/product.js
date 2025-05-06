// Import mongoose to interact with MongoDB
import mongoose from "mongoose";


//Define the Product Schema (Structure)
const productSchema = new mongoose.Schema(
  {
    // Name of the product (required)
    name: {
      type: String,
      required: true, // This field must be provided
    },

    // Price of the product (required)
    price: {
      type: Number,
      required: true,
    },

    // Image URL of the product (required)
    image: {
      type: String,
      required: true,
    },
  },
  {
    //to track
    timestamps: true,
  }
);

//creating a model
const Product = mongoose.model("Product", productSchema);

// Export the model so we can use it in our routes or controllers
export default Product;
