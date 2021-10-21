import MessageContoller from '@controllers/MessageController';
import Router from 'express';

const router = Router();

router.post('/', MessageContoller.create);
router.get('/', MessageContoller.getLast3Messages);

export default router;
