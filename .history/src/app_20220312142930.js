// const http = require('http');
// const res = require('express/lib/response');
import express from 'express';
import cors from 'cors';
import productRouter from './routes/product';
import morgan from 'morgan';
import mongoose from 'mongoose';

const app = express();
//middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
// router
app.use("/api", productRouter)
//conection db
mongoose.connect('mongodb://localhost:27017/we16310');
    .then(() => console.log)

//conect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});