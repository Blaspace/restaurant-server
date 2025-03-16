import Blog from "../schema/BlogSchema.js";

const handleGetSingleBlog = async(req, res)=>{
    const {id} = req.params
    try{
        const blog =await Blog.findById(id)
        res.send(blog)
    }catch (err){
        console.log(err);
        res.sendStatus(500)  
    }
}

export default handleGetSingleBlog