import { Schema, model } from "mongoose";

const productSchema = Schema({
  name: String,
  details: String,
  productId: Array,
  shopId: String,
  image: String,
  category: String,
  price: Number,
});

const Product = model("product", productSchema);

export default Product;
