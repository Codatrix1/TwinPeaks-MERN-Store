import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//-----------------------------------------------------------------------
// Level 1 Security: Authenticate User: Protect Routes w/ verified token
//-----------------------------------------------------------------------
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Set token from bearer token in headers
    token = req.headers.authorization.split(" ")[1];
  }

  // Check for token
  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token");
  }

  try {
    // Verify signed token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);

    // Setting the User Data if found in the decoded token
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.error(error);
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

//---------
// Exports
//---------
export { protect };
