import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { checkAuth } from "../middlewares/checkAuth ";
import { userById } from './../controllers/user';

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products/:userId', checkAuth, create, requiredSign );
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

export default router;