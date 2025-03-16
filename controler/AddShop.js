/** @format */

import Shop from "../schema/ShopSchema.js";

const handleAddShop = async (req, res) => {
  const { name, category, location, state, city, type } = req.body;
  try {
    const shop = await Shop.create({
      name,
      category,
      location,
      state,
      city,
      type,
    });
    res.send(shop);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

export default handleAddShop;
