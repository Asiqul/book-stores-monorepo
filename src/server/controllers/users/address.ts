import prisma from '../../db/connection';
import { Request, Response } from 'express';

const address = async (req: Request, res: Response) => {
    const userId = req.body.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                address: true,
            },
        });
        return res.status(200).json({
            status: 'OK',
            message: 'User address',
            data: user?.address,
        });
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default address;
