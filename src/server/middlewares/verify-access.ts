import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const verifyAccess = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = (authHeader && authHeader.split(' ')[1]) || '';
    const accessKey = process.env.ACCESS_TOKEN_KEY || '';

    if (!token) {
        res.status(401).json({
            status: 'Unauthorized',
            message: 'Access token null.',
        });
    }

    try {
        jwt.verify(token, accessKey, (error, decoded) => {
            if (error) {
                return res.status(401).json({
                    status: 'Unauthorized',
                    message: 'Invalid access token.',
                });
            }
            req.body.user = decoded;
            next();
        });
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default verifyAccess;
