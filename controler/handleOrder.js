import Order from "../schema/OrderSchema.js"

async function handleOrder(req, res) {
    if(req.body){
    req.body.forEach(async (value) => {
        value.status = "pending"
        value.date = new Date()
        value.userId = req.user._id
    });
   const i = await Order.insertMany(req.body)
    res.send(i)
    }
}

export default handleOrder
