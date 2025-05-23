import express from "express";
import handleSignup from "../controler/Signup.js";
import handleLogin from "../controler/Login.js";
import handleGetUser from "../controler/GetUser.js";
import handleOrder from "../controler/handleOrder.js";
import AuthMiddelware from "../middleware/AuthMiddelware.js";
import handlePaystack from "../controler/handlePaystack.js";

const UserRoute = express.Router();

UserRoute.post("/signup", handleSignup);

UserRoute.post("/login", handleLogin);

UserRoute.get("/user", AuthMiddelware, handleGetUser);

UserRoute.post("/order", AuthMiddelware, handleOrder);

UserRoute.get("/orders", AuthMiddelware)

UserRoute.post("/paystack", handlePaystack)

export default UserRoute;
