import { Router } from "express";
import { checkAuth } from "../middlewares/checkAuth ";

const router = Router();

router.get('/products', checkAuth, list);
router.post('/products/:userId', checkAuth, create, requiredS);
router.get('/product/:id', checkAuth, get);
router.delete('/product/:id', checkAuth, remove);
router.put('/product/:id', checkAuth, update);

export default router;