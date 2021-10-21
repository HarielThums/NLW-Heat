import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

class AuthenticateController {
  async authenticate(req: Request, res: Response) {
    try {
      const service = AuthService;
      
      const result = await service.authenticate(req.body.code);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new AuthenticateController();
