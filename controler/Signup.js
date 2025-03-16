/** @format */

import User from "../schema/UserSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handleSignup = async (req, res) => {
  const { name, location, email, password, phoneNumber } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.sendStatus(409);
    const accessToken = jwt.sign({email}, process.env.JWT_SECRETE, {
      expiresIn: "15d",
    });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      password: hashedPassword,
      email,
      location,
      accessToken,
      verified: false,
      role: 2000,
      name,
      phoneNumber
    });
    console.log(newUser);
    res.send({ accessToken });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default handleSignup;
