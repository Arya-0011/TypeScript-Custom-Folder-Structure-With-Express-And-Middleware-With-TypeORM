import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../Entities/User';
import { structureResponse } from '../utils/StructureResponse';
import { TokenMissingException, TokenVerificationException } from './Exceptions/AuthException';
import { cred } from '../loader/ConfigLoader';

const STATUS_UNAUTHORIZED = 401;
const STATUS_INTERNAL_SERVER_ERROR = 500;
const STATUS_OK = 200;
const MESSAGE_TOKEN_NOT_PROVIDED = 'Token not provided';
const MESSAGE_INVALID_TOKEN_FORMAT = 'Invalid token format';
const MESSAGE_SECRET_KEY_UNDEFINED = 'JWT secret key is undefined';

const sendErrorResponse = (res: Response, exception: any, message: string, status: number): void => {
  res.status(status).json(structureResponse(exception, false, message));
};

const jwtMiddleware = {
  generateToken: (user: User): string => {
    const payload = {
      email: user.email,
      username: user.username,
    };
    const secretKey: Secret = cred.JWT_SECRET_KEY || 'default-secret';
    const options = {
      expiresIn: cred.JWT_SECRET_KEY_EXPIRE,
    };

    return jwt.sign(payload, secretKey, options);
  },

  verifyToken: (req: Request, res: Response, next: NextFunction): void => {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader) {
      sendErrorResponse(res, new TokenMissingException(), MESSAGE_TOKEN_NOT_PROVIDED, STATUS_UNAUTHORIZED);
      return;
    }

    const token = tokenHeader!.split(' ')[1];

    if (!token) {
      sendErrorResponse(res, new TokenMissingException(), MESSAGE_INVALID_TOKEN_FORMAT, STATUS_UNAUTHORIZED);
      return;
    }

    const secretKey: Secret | undefined = cred.JWT_SECRET_KEY;

    if (!secretKey) {
      sendErrorResponse(res, null, MESSAGE_SECRET_KEY_UNDEFINED, STATUS_INTERNAL_SERVER_ERROR);
      return;
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        sendErrorResponse(res, new TokenVerificationException(), 'Invalid token', STATUS_UNAUTHORIZED);
        return;
      }
      req.body.user = decoded;
      next();
    });
  },
};

export default jwtMiddleware;
