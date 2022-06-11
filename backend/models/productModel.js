import mongoose from "mongoose";

//-----------------
// Review Schema
//----------------
const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  // Timestamps for createdAt field
  {
    timestamps: true,
  }
);

//-------------------
// Product Schema
//-------------------
const ProductSchema = new mongoose.Schema(
  {
    // Parent Referencing: Refers to the "User" [Admin] who created the Product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    // Child Referencing:  Refers to all the reviews posted on a specific "Product" as an Array
    reviews: [ReviewSchema],

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  // Timestamps for createdAt and updatedAt fields auto creation
  {
    timestamps: true,
  }
);

//-------------------------
// Create Model and export
//------------------------
const Product = mongoose.model("Product", ProductSchema);

export default Product;
