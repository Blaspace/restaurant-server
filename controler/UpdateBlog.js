import Blog from '../schema/BlogSchema'

const handleUpdateBlog =async (req, res) =>{
    const {id} = req.params
    try{
    const blog = await Blog.findByIdAndUpdate(id, req.body)

    res.send(blog)
    }catch (err){
        console.log(err);
        res.sendStatus(500)
    }
}

export default handleUpdateBlog