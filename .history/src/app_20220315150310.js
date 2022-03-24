// const http = require('http');
// const res = require('express/lib/response');
import express from 'express';
import cors from 'cors';
import productRoute from './routes/product';
import morgan from 'morgan';
import mongoose from 'mongoose';
import {}

const app = express();
// middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.use("/api", productRoute)

//conection db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(() => console.log("Ket noi DB thanh cong"))
    .catch(error => console.log(error))

//conect
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server của bạn đang chạy cổng: ", PORT);
});