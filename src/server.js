import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import QueueController from './app/controllers/QueueController';

const app = express();
app.use(express.json())

app.get('/queue/status', QueueController.show)
app.post('/users', UserController.store)

app.listen(3333, () =>{ 
    console.log("Ouvindo")
})