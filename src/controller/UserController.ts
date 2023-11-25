import { UserService } from './../Services/UserService';
import { NextFunction, Request, Response } from "express";

const userService = new UserService();
/**
* @controller
* to control every business and service login 
*/

export class UserController {

    public allUser = async (req: Request, res: Response, next: NextFunction) => {
        const response = await userService.allUser(req, res, next);
        res.send(response);
    };

}