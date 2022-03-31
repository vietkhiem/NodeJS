import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { isAdmin, isAuth, requiredSigin } from "../middlewares/checkAuth ";

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products/:userId', requiredSigin, isAuth, isAdmin, create);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

router.param('userId', userById)

export default router;