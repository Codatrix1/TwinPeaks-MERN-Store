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
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

//  Routes import
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Body parser: limiting data reading from body into req.body
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.send("API is running...........");
});

// Invoke Routers
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

//-------------------
// MIDDLEWARE STACK
//------------------

// Error Middlewares
app.use(notFound);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
);
