// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
import {
  login,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";

// Auth Middlewares
import { protect } from "../middlewares/authMiddleware.js";

//---------------
// Define Routes
//---------------
router.route("/").post(registerUser);
router.route("/login").post(login);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//---------------
// Export router
//---------------
export default router;
