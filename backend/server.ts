import express, { Application } from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import passportConfig from './config/passport';
import dbConnect from './db/models/init';
import routeHandler from './routes';
import fs from 'fs';
import https from 'https';

const env = process.env.NODE_ENV;
dotenv.config({ path: env === 'production' ? './config/prod.env' : './config/dev.env' });
passportConfig(passport);

const app: Application = express();

app.use(passport.initialize())

app.use(express.json());
app.use("/", routeHandler);

app.get("/", (req, res) => {
    console.log("hi")
})

const privateKey = fs.readFileSync('../mysite.example-key.pem');
const certificate = fs.readFileSync('../mysite.example.pem');


const init = async () => {
    // await dbConnect();
    const h = https.createServer({
        key: privateKey,
        cert: certificate
    }, app)
    const l = h.listen(1313, () => {
        console.log('app started');
        console.log(h.address());
    });
};

init();
