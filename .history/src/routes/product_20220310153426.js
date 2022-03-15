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

router.get('/products', checkAuth,);
router.post('products', checkAuth,);
router.get('/product/:id', checkAuth, (req, res) => {
    res.json(data.find(item => item.id == req.params.id));
});
router.delete('product/:id', checkAuth, (req, res) => {
    res.json(data.filter(item => item.id != req.params.id));
});
router.put('product/:id', checkAuth, (req, res) => {
    const result = data.map(item => item.id == req.params.id ? req.body : item)
    res.json(result);
})
export default router;