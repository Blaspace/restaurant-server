import Shop from '../schema/ShopSchema.js'

const handleDeleteShop =async (req, res)=>{
    const {id} = req.params
    try{
        const shop = await Shop.findByIdAndDelete(id)
        res.send(shop)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleDeleteShop