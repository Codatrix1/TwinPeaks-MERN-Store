// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
import { createOrder, getOrderById } from "../controllers/orderController.js";

// Auth Middlewares
import { protect } from "../middlewares/authMiddleware.js";

//---------------
// Define Routes
//---------------
router.route("/").post(protect, createOrder);
router.route("/:id").get(protect, getOrderById);

//---------------
// Export router
//---------------
export default router;
