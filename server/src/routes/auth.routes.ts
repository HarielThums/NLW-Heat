import AuthController from '@controllers/AuthController';
import Router from 'express';

const router = Router();

router.post('/authenticate', AuthController.authenticate);

export default router;
