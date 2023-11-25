import { Application } from "express";
import healthCheckRouter from "../routes/HealthRoutes";

export class RoutesLoader {
    public static initRoutes(app: Application, version: string) {
        app.use(`/api/${version}/health`, healthCheckRouter);
    }
}
