import Queue from 'bull';
import redisConfig from '../../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, redisConfig),
    name: job.key,
    handle: job.handle
}))

export default {
    queues,
    add(name, data){
        const queue = this.queues.find(queue => queue.name == name);
        return queue.bull.add(data);
    },
    async retryFailed(name){
        const queue = this.queues.find(queue => queue.name == name);
        const failedJobs = await queue.bull.getFailed();
        await Promise.all(failedJobs.map(job => job.retry()));
        return failedJobs.length;
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed', (job, error) => {
                console.log(queue.key, job.data)
            })
        })
    }
};