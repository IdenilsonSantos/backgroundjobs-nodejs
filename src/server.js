import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import HealthController from './app/controllers/HealthController';

const app = express();
app.use(express.json())

app.get('/health', HealthController.show)
app.post('/users', UserController.store)

app.listen(3333, () =>{ 
    console.log("Ouvindo")
})