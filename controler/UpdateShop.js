import Shop from "../schema/ShopSchema.js";

const handleUpdateShop =async (req, res)=>{
    const {id} = req.params
    try{
        const shop = await Shop.findByIdAndUpdate(id, req.body)
        res.send(shop)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleUpdateShop