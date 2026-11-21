import Queue from '../lib/Queue';

export default {
    async show(req, res) {
        const queues = Queue.queues.map(queue => ({
            name: queue.name,
            status: queue.bull.client.status === 'ready' ? 'up' : 'down'
        }));

        return res.status(200).json({
            server: 'up',
            queues
        });
    }
}
