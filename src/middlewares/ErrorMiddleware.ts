import { Request, Response, NextFunction } from 'express';
import { InternalServerException } from '../utils/Exceptions/ApiException';
import { TokenExpiredException, TokenVerificationException } from '../utils/Exceptions/AuthException';
import { cred } from '../loader/ConfigLoader';

function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
    console.log(req.url)
    console.log(req.baseUrl)
    console.log(req.originalUrl)
    if (err.status === 500 || !err.message) {
        if (!err.isOperational) err = new InternalServerException('Internal server error');
    } else if (err.name === "JsonWebTokenError") {
        err = new TokenVerificationException();
    }
    else if (err.message === "jwt expired") {
        err = new TokenExpiredException();
    }

    const { message, code, error, status, data, stack } = err;
    console.log(err)
    if (cred.SERVER_CRED === "development") {
        console.info(`[Exception] ${error}, [Code] ${code}`);
        console.info(`[Error] ${message}`);
        console.info(`[Stack] ${stack}`);
    }

    const headers = {
        success: false,
        message,
        ...(data && { data })
    };

    res.status(status).send({ headers, body: {} });
}

export default errorMiddleware;
