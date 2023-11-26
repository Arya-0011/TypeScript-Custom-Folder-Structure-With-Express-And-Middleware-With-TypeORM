import { Application } from "express";
import healthCheckRouter from "../routes/HealthRoutes";
import authRoutes from "../routes/AuthRoutes"
import userRoutes from "../routes/UserRoutes"
import blogRoutes from "../routes/BlogRoutes"

export class RoutesLoader {
    public static initRoutes(app: Application, version: string) {

        //Routes for endpoints 
        app.use(`/api/${version}/health`, healthCheckRouter);
        app.use(`/api/${version}/auth`, authRoutes);
        app.use(`/api/${version}/users`, userRoutes);
        app.use(`/api/${version}/blog`, blogRoutes);
    }
}
