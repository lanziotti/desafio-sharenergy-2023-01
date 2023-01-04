import { Router } from 'express';
import { ClientController } from './controllers/ClientController';

const router = Router();

router.post('/client', new ClientController().create);
router.get('/client/:id', new ClientController().findById);
router.put('/client/:id', new ClientController().update);
router.delete('/client/:id', new ClientController().delete);

export default router