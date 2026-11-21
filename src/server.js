import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import JobController from './app/controllers/JobController';

const app = express();
app.use(express.json())

app.post('/users', UserController.store)
app.post('/api/v1/jobs/:queue/retry-failed', JobController.retryFailed)

app.listen(3333, () =>{ 
    console.log("Ouvindo")
})