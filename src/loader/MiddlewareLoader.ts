import { Request, Response, NextFunction, Application } from 'express';
import { InvalidEndpointException } from '../utils/Exceptions/ApiException';
import errorMiddleware from '../middlewares/ErrorMiddleware';

class MiddlewareLoader {
    public static init(app: Application): void {

        app.use('*', (req: Request, res: Response, next: NextFunction) => {
            const err = new InvalidEndpointException(`Invalid endpoint or request Method: ${req.method} ${req.originalUrl}`);
            next(errorMiddleware(err, req, res, next));
        });

    }
}

export { MiddlewareLoader };
