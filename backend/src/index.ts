import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes';
import { AppMongoose } from './database/data-source';

const port = process.env.PORT as number | undefined

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

AppMongoose.then((data) => {
    console.log('MongoDB Conectado com Sucesso!');
}).catch((err) => {
    console.log('Erro no DB connection.', err.message);
});

app.listen(port);