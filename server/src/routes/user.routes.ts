import UserController from '@controllers/UserController';
import Router from 'express';

const router = Router();

router.get('/profile', UserController.find);

export default router;
