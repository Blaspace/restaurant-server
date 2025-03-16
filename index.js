import express from 'express'
import cors from 'cors'
import BlogRoute from './router/BlogRoute.js';
import UserRoute from './router/UserRoute.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import ShopRoute from './router/ShopRoute.js';
import ProductRoute from './router/ProductRoute.js';

dotenv.config()
const app = express()
const dbUrl = 'mongodb://localhost:27017/lastprice';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(ProductRoute)
app.use(BlogRoute)
app.use(UserRoute)
app.use(ShopRoute)

app.get('/', (req, res)=>{
    res.send('<h1>Welcome to LastPrice server created by <a href="https://jamesdev.com.ng">James Ngbede Samuel</a>...</h1>')
})


const PORT = process.env.PORT || 5000;

mongoose.connect(dbUrl)
.then(()=>{
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
})
