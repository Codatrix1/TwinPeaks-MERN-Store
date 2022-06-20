import express from "express";
const router = express.Router();

import asyncHandler from "express-async-handler";

// Import Model
import Product from "../models/productModel.js";

//---------------
// Define Routes
//---------------
// @ desc Fetch All Products
// @ route GET /api/products
// @ access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // res.status(401);
    // throw new Error("Not Authorized");
    res.json(products);
  })
);

// @ desc Fetch Single Product
// @ route GET /api/products/:id
// @ access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//----------------
// Default Export
//----------------
export default router;
