import { awaitHandlerFactory } from '../middleware/AwaitHandlerFactoryMiddleware';
import { HealthController } from './../controller/HealthController';
import { Router } from "express";

const healthController = new HealthController();
const router = Router();

router.get('/', awaitHandlerFactory(healthController.getHealthStaus));

export default router;