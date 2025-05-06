// Importing required packages
import express from "express";

// Importing custom modules
import { deleteProduct, getProducts, postProduct, putProducts } from "../controllers/productController.js";

// Making router
const router = express.Router();

// POST - Create a new product
router.post("/", postProduct);

// DELETE - Delete a product by ID
router.delete("/:id", deleteProduct);

// GET - Fetch all products
router.get("/", getProducts);

// PUT - Update product by ID
router.put("/:id",putProducts);

export default router;
