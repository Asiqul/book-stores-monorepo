import prisma from '../../db/connection';
import { Request, Response } from 'express';

const profile = async (req: Request, res: Response) => {
    const userId = req.body.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
            select: {
                firstname: true,
                lastname: true,
                email: true,
                phone: true,
                main_address: true,
                address: {
                    select: {
                        id: true,
                        recipient: true,
                        province: true,
                        city: true,
                        district: true,
                        postal_code: true,
                        full_address: true,
                    },
                },
            },
        });
        return res.status(200).json({
            status: 'OK',
            message: 'User profile',
            data: user,
        });
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default profile;
