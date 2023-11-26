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
                main_address: true,
            },
        });

        if (user?.main_address === null) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found',
            });
        }
        const mainAddress = await prisma.address.findUnique({
            where: {
                id: user?.main_address,
            },
            select: {
                id: true,
                label: true,
                recipient: true,
                province: true,
                provinceId: true,
                city: true,
                cityId: true,
                district: true,
                postal_code: true,
                full_address: true,
            },
        });
        return res.status(200).json({
            status: 'OK',
            message: 'User address',
            data: mainAddress,
        });
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default address;
