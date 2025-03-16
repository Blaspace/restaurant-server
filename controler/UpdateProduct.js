import Product from '../schema/ProductSchema.js'

const handleUpdateProduct = async (req, res)=>{
    const {id}= req.params
    try{
        const product = await Product.findByIdAndUpdate(id, {...req.body})

        res.send(product)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleUpdateProduct