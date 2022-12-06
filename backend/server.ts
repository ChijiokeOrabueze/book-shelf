import express, { Application } from 'express';
import dbConnect from './db/models/init';
import routeHandler from './routes';

const app: Application = express();

app.use(express.json());
app.use("/api/v1", routeHandler);

const init = async () => {
    await dbConnect();
    app.listen(1337, () => {
        console.log('app started');
    });
};

init();
