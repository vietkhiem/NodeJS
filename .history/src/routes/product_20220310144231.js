import { Router } from "express";
const router = Router();

const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    }else {
        console.log("Chim cut");
    }
}

app.get('/api/products', checkAuth, (req, res) => {
    const data = [
        {id: 1, name: "Product A"},
        {id: 2, name: "Product B"}
    ];
    res.json(data);
})