import express from 'express'
import handleSignup from '../controler/Signup.js'
import handleLogin from '../controler/Login.js'
import handleGetUser from '../controler/GetUser.js'

const UserRoute = express.Router()

UserRoute.post("/signup", handleSignup)

UserRoute.post("/login", handleLogin)

UserRoute.get("/user", handleGetUser)

export default UserRoute