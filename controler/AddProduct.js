/** @format */

import Product from "../schema/ProductSchema.js";

const handleaddProduct = async (req, res) => {
  const { name, details, packages, shop, price } = req.body;
  try{
  const product = await Product.create({
    name,
    details,
    packages,
    shop,
    price,
  });

  res.send(product)
}catch (err){
    console.log(err);
    res.sendStatus(500)
}
};

export default handleaddProduct
