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

router.get('/products', checkAuth, (req, res) => {
    res.json(data);
});
router.post('products', checkAuth, (req, res) => {
    data.push(req.body);
    console.log(data);
    res.json(data);
})
export default router;