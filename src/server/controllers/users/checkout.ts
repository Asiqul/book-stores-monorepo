import prisma from '../../db/connection';
import { Request, Response } from 'express';

const checkout = async (req: Request, res: Response) => {
    const { bookId, quantity, address } = req.body;
    const userId = req.body.user.id;
    try {
        const user = await prisma.users.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            return res.status(404).json({
                status: 'Not Found',
                message: 'User not found',
            });
        }

        const checkCart = await prisma.cart.findFirst({
            where: {
                userId: userId,
            },
        });
        if (!checkCart) {
            const cart = await prisma.cart.create({
                data: {
                    user: {
                        connect: {
                            id: userId,
                        },
                    },
                },
            });

            await prisma.historyItems.create({
                data: {
                    cart: {
                        connect: {
                            id: cart.id,
                        },
                    },
                    book: {
                        connect: {
                            id: bookId,
                        },
                    },
                    address: {
                        connect: {
                            id: address,
                        },
                    },
                    quantity,
                },
            });
        } else {
            const checkItem = await prisma.historyItems.findFirst({
                where: {
                    bookId,
                    cartId: checkCart.id,
                    addressId: address,
                },
            });
            if (checkItem) {
                await prisma.historyItems.update({
                    where: {
                        id: checkItem.id,
                    },
                    data: {
                        quantity: quantity + checkItem.quantity,
                    },
                });
            } else {
                await prisma.historyItems.create({
                    data: {
                        cart: {
                            connect: {
                                id: checkCart.id,
                            },
                        },
                        book: {
                            connect: {
                                id: bookId,
                            },
                        },
                        address: {
                            connect: {
                                id: address,
                            },
                        },
                        quantity,
                    },
                });
            }
        }

        res.status(200).json({
            status: 'OK',
            message: 'Book successfully bought',
        });
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default checkout;
