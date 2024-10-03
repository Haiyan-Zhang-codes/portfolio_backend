import Router from 'koa-router';
import { getAnswersForChatBox } from '../controllers/chatbox.controller';

const router = new Router();

router.post('/chatbox', getAnswersForChatBox)

export default router;