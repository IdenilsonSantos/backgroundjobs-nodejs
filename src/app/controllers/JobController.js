import Queue from '../lib/Queue';

/**
 * Reenfileira os jobs falhos de uma fila e devolve quantos foram reprocessados.
 */
export default {
    async retryFailed(req, res) {
        const { queue } = req.params;

        const queueExists = Queue.queues.some(q => q.name === queue);
        if (!queueExists) {
            return res.status(404).json({ error: 'Fila não encontrada' });
        }

        const reprocessados = await Queue.retryFailed(queue);

        return res.json({
            data: { reprocessados },
            geradoEm: new Date().toISOString()
        });
    }
}
