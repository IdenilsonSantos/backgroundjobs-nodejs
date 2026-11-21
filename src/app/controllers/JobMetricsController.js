import Queue from '../lib/Queue';

/**
 * Devolve o total de jobs concluídos e falhos por fila,
 * contabilizados desde que este servidor foi iniciado.
 */
export default {
    async index(req, res){
        const metrics = Queue.getMetrics();
        return res.json({
            data: metrics,
            geradoEm: new Date().toISOString()
        })
    }
}
