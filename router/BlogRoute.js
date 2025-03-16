import express from 'express'
import handleAddBlog from '../controler/AddBlog.js'
import handleDeleteBlog from '../controler/DeleteBlog.js'
import handleGetBlog from '../controler/handleGetBlog.js'
import handleGetSingleBlog from '../controler/GetSingleBlog.js'

const BlogRoute = express.Router()

BlogRoute.post('/blog/add', handleAddBlog)

BlogRoute.get('/blog/delete/:id', handleDeleteBlog)

BlogRoute.post('/blog/update/:id', handleAddBlog)

BlogRoute.get('/blog/get', handleGetBlog)

BlogRoute.get('/blog/get/:id', handleGetSingleBlog)

export default BlogRoute