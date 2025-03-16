import Product from "../schema/ProductSchema.js";

const handleGetProduct =async(req, res)=>{
    try{
        const product =await Product.find()
        res.send(product)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleGetProduct