import { Request, Response, NextFunction } from 'express';

const verifyEmail = (req: Request, res: Response, next: NextFunction) => {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    const email = req.body.email;
    const result = regex.test(email);
    try {
        if (result) {
            next();
        } else {
            res.status(400).json({
                status: 'Bad Request',
                message: 'Format email tidak valid.',
            });
        }
    } catch (error) {
        return error;
    }
};

export default verifyEmail;
