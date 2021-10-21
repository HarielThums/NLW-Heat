import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  try {
    const AuthHeader = req.headers.authorization;

    if (!AuthHeader) return res.status(401).send({ message: 'No Token provided' });

    const parts = AuthHeader.split(' ');

    if (parts.length !== 2) return res.status(401).send({ message: 'Token error' });

    const [bearer, token] = parts;

    if (!/^Bearer$/.test(bearer)) return res.status(401).send({ message: 'Token Malformatted' });

    verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ message: 'Token invalid' });

      req.user_id = decoded.id;
    });

    if (next) return next();
  } catch (error) {
    return res.status(500).json({ message: 'Internal error, try again' });
  }
}
