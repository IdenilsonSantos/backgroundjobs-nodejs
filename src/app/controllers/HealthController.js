// Acme: controller do health check
import Queue from '../lib/Queue';

export default {
    async show(req, res){
        const healthy = await Queue.checkHealth();

        if (healthy) {
            return res.status(200).json({ status: 'ok', queues: Queue.queues.map(queue => queue.name) });
        }

        return res.status(503).json({ status: 'degraded' });
    }
}
