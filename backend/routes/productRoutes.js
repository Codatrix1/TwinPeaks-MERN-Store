// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
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
// Export Router
//----------------
export default router;
