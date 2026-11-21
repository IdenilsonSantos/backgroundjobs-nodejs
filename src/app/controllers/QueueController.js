import Queue from '../lib/Queue';

export default {
    async show(req, res) {
        const counts = await Promise.all(
            Queue.queues.map(queue => queue.bull.getJobCounts())
        );

        const status = counts.reduce((acc, count) => ({
            pending: acc.pending + count.waiting,
            running: acc.running + count.active,
            failed: acc.failed + count.failed
        }), { pending: 0, running: 0, failed: 0 });

        return res.status(200).json(status);
    }
}
