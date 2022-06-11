import mongoose from "mongoose";

//------------------
// Define a schema
//------------------
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },

    email: {
      type: String,
      required: [true, "Please provide an email address"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please provide password"],
    },

    isAdmin: {
      type: Boolean,
      required: [true, "Please provide a role"],
      default: false,
    },
  },
  // Timestamps for createdAt and updatedAt fields auto creation
  {
    timestamps: true,
  }
);

//----------------------------
// Create and export model
//---------------------------
const User = mongoose.model("User", UserSchema);

export default User;
