import UserService from '@services/UserSerivce';
import { Request, Response } from 'express';

class UserContoller {
  async find(req: Request, res: Response) {
    try {
      const user_id = req.user_id;

      const service = UserService;
      
      const user = await service.find(user_id);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserContoller();
