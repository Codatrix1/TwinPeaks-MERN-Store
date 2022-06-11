import mongoose from "mongoose";

//---------------------
// Define Order Schema
//---------------------
const OrderSchema = new mongoose.Schema(
  {
    // Parent Referencing:  Refers to the specific "User" who placed the Order/Buys the product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Child Referencing:  Refers to all the products/items ordered by a specific "User" as an Array
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        // Parent Referencing:  Refers to specific "Product" which has been ordered by the specific "User"
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],

    shippingAddress: {
      // Embedded Objects in a specific document
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    // Code fields specifically From PayPal Docs
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },

    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },

    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },

    paidAt: {
      type: Date,
    },

    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },

    deliveredAt: {
      type: Date,
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
const Order = mongoose.model("Order", OrderSchema);

export default Order;
