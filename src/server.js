import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import JobMetricsController from './app/controllers/JobMetricsController';

const app = express();
app.use(express.json())

app.post('/users', UserController.store)
app.get('/api/v1/jobs/metrics', JobMetricsController.index)

app.listen(3333, () =>{ 
    console.log("Ouvindo")
})