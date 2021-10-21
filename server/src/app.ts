import routes from '@routes/routes';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('user connected', socket.id);
});

export { server, io };
