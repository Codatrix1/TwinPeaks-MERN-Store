// Env
import dotenv from "dotenv";
dotenv.config();

// Database Connection
import connectDB from "./config/connectDB.js";
connectDB();

// Express
import express from "express";
const app = express();

// Rest of the imports
import colors from "colors";

//  Routes import
import productRoutes from "./routes/productRoutes.js";

// Set Routers
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("API is running...........");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
);
