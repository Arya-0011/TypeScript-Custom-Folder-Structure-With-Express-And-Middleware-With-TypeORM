import { AuthService } from './../Services/AuthService';
import { NextFunction, Request, Response } from "express";

const authService = new AuthService();
/**
* @controller
* to control every business and service login 
*/

export class AuthController {

	public registerUser = async (req: Request, res: Response, next: NextFunction) => {
		const response = await authService.register(req, res, next);
		res.send(response);
	};

	public loginUser = async (req: Request, res: Response, next: NextFunction) => {
		const response = await authService.login(req, res, next)
		res.send(response);
	}
}