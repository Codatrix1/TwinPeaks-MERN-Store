import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//----------------------------------------------------------------
// @ desc Login: Authorize User & get token
// @ route POST /api/users/login
// @ access Public
const login = asyncHandler(async (req, res, next) => {
  // Destructure & Pull out the fields from req.body
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.comparePassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//-------------------------------------------------------------
// @desc     Get current logged in user
// @route    GET /api/users/profile
// @access   Private
const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

//---------
// Exports
//---------
export { login, getUserProfile };
