import jwt from "jsonwebtoken";

//-------------------------------------
// Generate token, Sign JWT and return
//-------------------------------------
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//---------------
// Default Export
//---------------
export default generateToken;
