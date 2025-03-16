import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name: String,
    location: Object,
    email: String,
    password: String,
    accessToken: String,
    verified: String,
    role: Number,
    phoneNumber:  String,
})

const User = mongoose.model("user", userSchema)

export default User