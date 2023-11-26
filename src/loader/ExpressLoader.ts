import express from "express";
import { Application } from "express";
import cors from 'cors';
import path from 'path';
import { limiter } from "../middlewares/AddRateLimiterMiddleware";
import session from "express-session";
import sessionConfig from "../middlewares/SessionMiddleware";

class ExpressLoader {
    public static init(): Application {
        const app: express.Application = express();

        app.use(express.json());
        app.use(express.urlencoded({
            extended: true
        }));

        app.use(session(sessionConfig))
        app.use(limiter)
        app.use(cors());
        // Set EJS as the view engine   
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '../../public'));

        return app;
    }
}

export { ExpressLoader };
