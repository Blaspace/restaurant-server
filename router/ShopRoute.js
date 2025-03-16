import { Router } from "express";
import handleAddShop from "../controler/AddShop.js";
import handleDeleteShop from "../controler/DeleteShop.js";
import handleUpdateShop from "../controler/UpdateShop.js";
import handleGetSingleShop from "../controler/GetSingleShop.js";
import handleGetShop from "../controler/GetShops.js";

const ShopRoute = Router()

ShopRoute.post('/shop/add', handleAddShop)

ShopRoute.get('/shop/delete/:id', handleDeleteShop)

ShopRoute.post('/shop/update/:id', handleUpdateShop)

ShopRoute.get('/shop/get/:id', handleGetSingleShop)

ShopRoute.get('/shop/get', handleGetShop)

export default ShopRoute