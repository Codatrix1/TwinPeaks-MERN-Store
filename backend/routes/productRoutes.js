import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getSingleProduct,
} from "../controllers/productController.js";

//---------------
// Define Routes
//---------------
router.route("/").get(getAllProducts);
router.route("/:id").get(getSingleProduct);

//----------------
// Default Export
//----------------
export default router;
