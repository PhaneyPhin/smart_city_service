
import { logger } from '@shared';
import { Request, Response, Router, Express } from 'express';
import Auth from '../controllers/Auth.controller';

// Init shared
const router = Router();
const auth = new Auth();
router.post('/login', auth.Login);


export default router;
