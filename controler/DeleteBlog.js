import Blog from "../schema/BlogSchema.js";

const handleDeleteBlog =async (req, res)=>{
    const {id} = req.params
    try{
    const blog =await Blog.findByIdAndDelete(id);
    res.send(blog)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleDeleteBlog