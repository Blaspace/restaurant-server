import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    name: String,
    userId: String,
    image: String,
    date: String,
    status: String,
})

const Order = mongoose.model('order', orderSchema)

export default Order