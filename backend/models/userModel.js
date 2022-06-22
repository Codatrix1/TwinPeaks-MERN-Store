import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

//------------------------------------------------
// Encrypting and Hashing password using bcryptjs
//------------------------------------------------
// IMP INFO: next() is NOT REQUIRED in latest Mongoose package Version 6: From the Docs
UserSchema.pre("save", async function (next) {
  // conditional execution: if password is NOT MODIFIED - DO NOT RUN ENCRYPTION and run next() immediately and skip rest of the code
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//----------------------------------------------------------------------------
// Comparing hashed password in DB to entered password for Authentication w/ Instance Method
//--------------------------------------------------------------------------
UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

//----------------------------
// Create and export model
//---------------------------
const User = mongoose.model("User", UserSchema);

export default User;
