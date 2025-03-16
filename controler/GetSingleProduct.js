import Product from "../schema/ProductSchema.js";

const handleGetSingleProduct =async (req, res)=>{
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        res.send(product)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleGetSingleProduct