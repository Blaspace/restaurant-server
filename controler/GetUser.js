const handleGetUser =async (req,res)=>{
    const {user} = req
    res.send(user)
}

export default handleGetUser