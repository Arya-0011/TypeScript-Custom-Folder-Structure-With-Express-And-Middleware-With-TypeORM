import { Response, Request, NextFunction } from "express";

export const awaitHandlerFactory = (middleware: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await middleware(req, res, next);
        } catch (err) {
            return next(err);
        }
    };
};