// imports express and router invoking
import express from "express";
const router = express.Router();

// import controller
import { login } from "../controllers/userController.js";

//---------------
// Define Routes
//---------------
router.route("/login").post(login);

//---------------
// Export router
//---------------
export default router;
