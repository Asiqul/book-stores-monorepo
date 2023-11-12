import jwt from 'jsonwebtoken';
import prisma from '../db/connection';
import { Request, Response, NextFunction } from 'express';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const refreshKey = process.env.REFRESH_TOKEN_KEY || '';
    try {
        const token = req.cookies.refreshToken;
        if (!token) {
            return res.status(401).json({
                status: 'Unauthorized',
                message: 'Invalid token.',
            });
        }
        const user = await prisma.users.findFirst({
            where: {
                refresh_token: token,
            },
        });
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'Invalid user token.',
            });
        }
        jwt.verify(token, refreshKey, (error: any) => {
            if (error) {
                return res.status(403);
            }
            req.body.user = user;
        });
        next();
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default verifyToken;
