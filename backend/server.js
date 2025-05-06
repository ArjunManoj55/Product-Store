// Importing required packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import CORS to allow front-back communication on different ports
import path from "path"; // ✅ Path module for handling file paths

// Importing custom modules
import { connectDB } from "./config/db.js"; // MongoDB connection function
import productRoutes from "./routes/productRoute.js"; // Routes for accessing product data

// Load environment variables from .env file (e.g., PORT, MONGO_URI)
dotenv.config();

// Create the Express app instance
const app = express();

// Middleware to enable CORS (Cross-Origin Resource Sharing), allowing the frontend to make requests
app.use(cors({ origin: "http://localhost:5173" })); // ✅ Allow frontend running on Vite dev server

// Middleware to parse JSON data in the request body for POST requests
app.use(express.json());

// Get PORT from environment variables, fallback to 5000 if not specified
const PORT = process.env.PORT || 5000;

// Resolve the directory name (useful for handling file paths, especially during deployment)
const __dirname = path.resolve();

// Connect to MongoDB and start the server
app.listen(PORT, () => {
  connectDB(); // Connect to MongoDB when the server starts
  console.log(`✅ Server is running on port ${PORT}`);
});

// Setting up routes
app.use("/api/products", productRoutes); // Define route for product-related API endpoints

// Deployment settings
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname,"/frontend/dist"))) ;

  app.get("*",(rwq,res) => {
    res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
  })
  // Additional settings for production (e.g., serve static files, set up logging, etc.)
  // You can add code here for serving static files or setting up production-specific configurations.
  // Example: 
  // app.use(express.static(path.join(__dirname, 'client/build')));

  // Catch-all route for serving the frontend (in production)
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // });
}
