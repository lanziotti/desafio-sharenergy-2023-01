import { Router } from 'express';
import { ClientController } from './controllers/ClientController';

const router = Router();

router.post('/client', new ClientController().create);
router.get('/client/:id', new ClientController().findById);

export default router