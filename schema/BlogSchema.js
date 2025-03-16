import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    headline: String,
    blog: String,
    image: String,
    date: String,
    url: String,
})

const Blog = mongoose.model('blog', blogSchema)

export default Blog