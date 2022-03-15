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

router.get('/products', checkAuth, );
router.post('products', checkAuth,);
router.get('/product/:id', checkAuth,);
router.delete('product/:id', checkAuth,);
router.put('product/:id', checkAuth,);
export default router;