import prisma from '@database/prisma';

class UserService {
  async find(id: string) {
    try {
      const user = await prisma.user.findFirst({ where: { id: id } });

      return user;
    } catch (error) {
      console.log('error on UserService: ', error);
    }
  }
}

export default new UserService();
