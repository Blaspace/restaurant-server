import { model, Schema } from "mongoose";

const shopSchema = new Schema({
    name: String,
    category: String,
    location: Object,
    state: String,
    city: String,
    type: String,
    deliveryTime: Array,
    operationTime: Array,
    phoneNumber: String,
    website: String,
    photo: String,
    coverPhoto: String
})

const Shop = model('shop', shopSchema)

export default Shop