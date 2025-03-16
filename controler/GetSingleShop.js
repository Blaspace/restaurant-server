import Shop from "../schema/ShopSchema.js";

const handleGetSingleShop = async(req,res)=>{
    const {id}= req.params

    try{
        const shop = await Shop.findById(id)
        res.send(shop)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleGetSingleShop