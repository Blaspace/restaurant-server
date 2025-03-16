/** @format */

import { Router } from "express";
import handleaddProduct from "../controler/AddProduct.js";
import handleDeleteProduct from "../controler/DeleteProduct.js";
import handleUpdateProduct from "../controler/UpdateProduct.js";
import handleGetProduct from "../controler/GetProduct.js";
import handleGetSingleProduct from "../controler/GetSingleProduct.js";

const ProductRoute = Router();

ProductRoute.post("/product/add", handleaddProduct);

ProductRoute.get("/product/delete/:id", handleDeleteProduct);

ProductRoute.post("/product/update/:id", handleUpdateProduct);

ProductRoute.get("/product/get", handleGetProduct);

ProductRoute.get("/prodct/get/:id", handleGetSingleProduct);

export default ProductRoute;
