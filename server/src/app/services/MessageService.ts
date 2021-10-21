import prisma from '@database/prisma';
import { io } from '@src/app';

class MessageService {
  async create(text: string, user_id: string) {
    try {
      const message = await prisma.message.create({ data: { text, user_id }, include: { user: true } });

      const infoWS = {
        text: message.text,
        user_id: message.user_id,
        created_at: message.created_at,
        user: {
          name: message.user.name,
          avatar_url: message.user.avatar_url,
        },
      };

      io.emit('new_message', infoWS);

      return message;
    } catch (error) {
      console.log('error on MessageService: ', error);
    }
  }

  async getLast3Messages() {
    try {
      const messages = await prisma.message.findMany({ take: 3, orderBy: { created_at: 'desc' }, include: { user: true } });
      return messages;
    } catch (error) {
      console.log('error on MessageService: ', error);
    }
  }
}

export default new MessageService();
