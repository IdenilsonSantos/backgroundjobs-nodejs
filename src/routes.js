// Acme: rotas HTTP do serviço de filas
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import HealthController from './app/controllers/HealthController';

const routes = new Router();
routes.post('/users', UserController.store);
routes.get('/health', HealthController.show);

export default routes;
