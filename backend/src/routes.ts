import { Router } from 'express';
import { ClientController } from './controllers/ClientController';

const router = Router();

router.post('/client', new ClientController().create);

export default router