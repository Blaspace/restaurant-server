import { Schema, model } from "mongoose";

const productSchema =Schema({
    name: String,
    details: String,
    shopId: String,
    category: String,
})

const Product = model('product', productSchema)

export default Product