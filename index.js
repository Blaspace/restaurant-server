import express from "express";
import cors from "cors";
import UserRoute from "./router/UserRoute.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const dbUrl = process.env.DB_URL;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(UserRoute);

app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to LastPrice server created by <a href="https://jamesdev.com.ng">James Ngbede Samuel</a>...</h1>'
  );
});

const PORT = process.env.PORT || 5000;

mongoose.connect(dbUrl).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
