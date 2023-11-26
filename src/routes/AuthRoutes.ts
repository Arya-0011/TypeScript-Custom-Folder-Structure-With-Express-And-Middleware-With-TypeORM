import { AuthController } from './../controller/AuthController';
import { awaitHandlerFactory } from '../middlewares/AwaitHandlerFactoryMiddleware';
import { Router } from "express";

const router = Router();
const authController = new AuthController();

router.post('/register', awaitHandlerFactory(authController.registerUser));
router.post('/login', awaitHandlerFactory(authController.loginUser));

export default router;