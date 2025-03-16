import Shop from '../schema/ShopSchema.js'

const handleGetShop =async (req, res)=>{
    try{
        const shops = await Shop.find()
        res.send(shops)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
        
    }
}

export default handleGetShop