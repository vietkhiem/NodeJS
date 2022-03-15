import { Router } from "express";
import { get } from "express/lib/response";
import { create, list, remove, update } from "../controllers/product";
const router = Router();


const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    }else {
        console.log("Chim cut");
    }
}

router.get('/products', checkAuth, list);
router.post('products', checkAuth, create);
router.get('/product/:id', checkAuth, get );
router.delete('product/:id', checkAuth, remove);
router.put('product/:id', checkAuth, update);
export default router;