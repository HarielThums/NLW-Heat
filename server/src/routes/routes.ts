import { ensureAuthenticated } from '@middlewares/ensureAuthenticated';
import Router from 'express';
import AuthRouter from './auth.routes';
import GithubRouter from './github.routes';
import MessageRouter from './message.routes';
import UserRouter from './user.routes';

const router = Router();

router.use('', GithubRouter);
router.use('/auth', AuthRouter);
router.use('/user', ensureAuthenticated, UserRouter);
router.use('/messages', ensureAuthenticated, MessageRouter);

export default router;
