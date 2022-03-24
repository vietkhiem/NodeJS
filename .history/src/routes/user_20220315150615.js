import { Router } from 'express';
import { register, login } from '../controllers/auth';
const router = Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router; 
0 comments on commit 32b5aa2