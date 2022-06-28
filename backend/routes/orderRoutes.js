// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
import { createOrder } from "../controllers/orderController.js";

// Auth Middlewares
import { protect } from "../middlewares/authMiddleware.js";

//---------------
// Define Routes
//---------------
router.route("/").post(protect, createOrder);

//---------------
// Export router
//---------------
export default router;
