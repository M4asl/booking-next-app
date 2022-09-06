import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import {
  allRooms,
  createRoom,
} from '../../../controllers/roomControllers';

const handler = nc();

dbConnect();

handler.get(allRooms);
handler.post(createRoom);

export default handler;