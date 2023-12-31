import { UserController } from './../controller/UserController';
import { awaitHandlerFactory } from '../middlewares/AwaitHandlerFactoryMiddleware';
import { Router } from "express";
import jwtMiddleware from '../utils/Token';

const router = Router();
const userController = new UserController();

router.get('/allUsers', jwtMiddleware.verifyToken, awaitHandlerFactory(userController.allUser));

export default router;