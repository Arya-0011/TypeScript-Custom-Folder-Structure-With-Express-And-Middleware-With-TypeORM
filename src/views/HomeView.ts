// Update your HealthRoutes or other route files
import { Request, Response } from 'express';

export const getHomePage = (req: Request, res: Response) => {
    res.render('home'); // Renders the home.ejs view
};
