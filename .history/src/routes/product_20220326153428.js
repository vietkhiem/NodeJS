import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { checkAuth, requiredSignin } from "../middlewares/checkAuth ";
import { isAuth } from './../../.history/src/middlewares/checkAuth _20220326152823';

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products/:userId', requiredSignin, isAuth, isAdmin, create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

export default router;