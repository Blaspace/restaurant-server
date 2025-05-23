/** @format */

import User from "../schema/UserSchema.js";
import jwt from "jsonwebtoken";

const Auth = async (req, res, next) => {
  // check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).send("Token does not start with Bearer");
  }
  const accessToken = authHeader.split(" ")[1];
  const user = await User.findOne({ accessToken });
  if (user) {
    try {
      const payload = jwt.verify(accessToken, process.env.JWT_SECRETE);
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).send("Authentication invalid");
    }
  } else {
    return res.status(401).send("User does not exist");
  }
};

export default Auth