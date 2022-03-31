import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { checkAuth, isAdmin, requiredSigin } from "../middlewares/checkAuth ";
import { userById } from './../controllers/user';
import { isAuth } from './../middlewares/checkAuth ';

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products/:userId', checkAuth, create, requiredSigin, isAdmin, isAuth );
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

router.param('userId', userById)
export default router;