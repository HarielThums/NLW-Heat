import MessageService from '@services/MessageService';
import { Request, Response } from 'express';

class MessageContoller {
  async create(req: Request, res: Response) {
    try {
      const { text } = req.body;
      const user_id = req.user_id;

      const service = MessageService;
      
      const result = await service.create(text, user_id);

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getLast3Messages(req: Request, res: Response) {
    try {
      const service = MessageService;

      const result = await service.getLast3Messages();

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new MessageContoller();
