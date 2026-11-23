import { Router } from 'express';
import Queue from './app/lib/Queue';

const routes = Router();

routes.get('/health', async (req, res) => {
    const waitingCounts = await Promise.all(
        Queue.queues.map(queue => queue.bull.getWaitingCount())
    );
    const pendentes = waitingCounts.reduce((total, count) => total + count, 0);

    return res.json({ status: 'ok', pendentes });
});

export default routes;
