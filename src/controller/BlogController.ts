import { BlogService } from './../Services/BlogService';
import { NextFunction, Request, Response } from "express";

const blogService = new BlogService();
/**
* @controller
* to control every business and service login 
*/

export class BlogController {

    public blog = async (req: Request, res: Response, next: NextFunction) => {
        const response = await blogService.blog(req, res, next);
        res.send(response);
    };

}