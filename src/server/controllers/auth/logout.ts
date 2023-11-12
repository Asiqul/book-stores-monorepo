import prisma from '../../db/connection';
import { Request, Response } from 'express';

const logout = async (req: Request, res: Response) => {
    const userId: string = req.body.user.id;
    await prisma.users.update({
        where: {
            id: userId,
        },
        data: {
            refresh_token: null,
        },
    });
    res.status(200).clearCookie('refreshToken').json({
        status: 'OK',
        message: 'User has logged out',
    });
};

export default logout;
