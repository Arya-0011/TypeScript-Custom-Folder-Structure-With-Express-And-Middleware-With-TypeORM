import { BlogController } from './../controller/BlogController';
import { awaitHandlerFactory } from '../middlewares/AwaitHandlerFactoryMiddleware';
import { Router } from "express";
import jwtMiddleware from '../utils/Token';

const router = Router();
const blogController = new BlogController();

router.get('/blogs', jwtMiddleware.verifyToken, awaitHandlerFactory(blogController.blog));

export default router;