// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
import {
  createOrder,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";

// Auth Middlewares
import { protect } from "../middlewares/authMiddleware.js";

//---------------
// Define Routes
//---------------
router.route("/").post(protect, createOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

//---------------
// Export router
//---------------
export default router;
