import Blog from "../schema/BlogSchema.js";

const handleGetBlog =async (req, res)=>{
    try{
    const blog =await Blog.find()
    res.send(blog)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleGetBlog