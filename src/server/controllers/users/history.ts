import prisma from '../../db/connection';
import { Request, Response } from 'express';

const history = async (req: Request, res: Response) => {
    const userId = req.body.user.id;
    try {
        const cart = await prisma.cart.findFirst({
            where: {
                userId: userId,
            },
        });

        if (!cart) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User history not found',
            });
        } else {
            const historyItems = await prisma.historyItems.findMany({
                where: {
                    cartId: cart.id,
                },
                select: {
                    quantity: true,

                    book: {
                        select: {
                            id: true,
                            title: true,
                            author: {
                                select: {
                                    name: true,
                                },
                            },
                        },
                    },
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
                message: 'User history',
                data: historyItems,
            });
        }
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default history;
