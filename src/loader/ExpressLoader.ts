import express from "express";
import { Application } from "express";
import cors from 'cors';

class ExpressLoader {
    public static init(): Application {

        const app: express.Application = express();

        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }))

        app.use(cors());

        return app;
    }
}

export { ExpressLoader };