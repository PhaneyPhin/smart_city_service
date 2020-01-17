import { Router } from 'express';
import User from '../controllers/User.controller';

// Init shared
const router = Router();
const user = new User();
router.post("/getUser", user.getUser);

export default router;
