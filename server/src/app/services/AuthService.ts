import prisma from '@database/prisma';
import axios from 'axios';
import jwt from 'jsonwebtoken';

interface IAcessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  name: string;
  id: number;
}

function generateToken(params = {}) {
  return jwt.sign(params, process.env.SECRET, { expiresIn: 84600 });
}

class AuthenticateService {
  async authenticate(code: string) {
    try {
      const url = 'https://github.com/login/oauth/access_token';

      const { data: accessTokenResponse } = await axios.post<IAcessTokenResponse>(url, null, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      });

      const response = await axios.get<IUserResponse>('https://api.github.com/user', {
        headers: {
          Authorization: 'Bearer ' + accessTokenResponse.access_token,
        },
      });

      const { login, id, avatar_url, name } = response.data;

      let user = await prisma.user.findFirst({
        where: { github_id: id },
      });

      if (!user) user = await prisma.user.create({ data: { github_id: id, name, avatar_url, login } });

      const token = generateToken({ id: user.id });

      return { token, user };
    } catch (error) {
      console.log('error on AuthenticateService: ', error);
    }
  }
}

export default new AuthenticateService();
