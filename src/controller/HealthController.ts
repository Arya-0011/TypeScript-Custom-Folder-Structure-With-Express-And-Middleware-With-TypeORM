import { Request, Response, NextFunction } from "express"
import { structureResponse } from "../utils/StructureResponse";

export class HealthController {

    public getHealthStaus = async (req: Request, res: Response, next: NextFunction) => {

        const healthCheck = {
            uptime: process.uptime().toFixed(2),
            health: 'OK',
            timeStamp: new Date(Date.now()).toJSON()
        };

        const response = structureResponse(healthCheck, true, "Success");
        res.send(response);
    }
}