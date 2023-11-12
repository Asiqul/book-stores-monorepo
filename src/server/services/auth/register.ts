import register from '../../controllers/auth/register';
import prisma from '../../db/connection';
import { Request, Response } from 'express';

const userRegister = async (req: Request, res: Response) => {
    const userData = req.body;
    try {
        const checkEmail = await prisma.users.findFirst({
            where: {
                email: userData.email,
            },
        });
        if (checkEmail) {
            res.status(400).json({
                status: 'Bad Request',
                message: 'Email sudah terdaftar.',
            });
        } else if (!(userData.password === userData.confPassword)) {
            res.status(400).json({
                status: 'Bad Request',
                message: 'Konfirmasi password tidak sesuai.',
            });
        } else {
            register(userData);
            res.status(201).json({
                status: 'OK',
                message: 'User created success.',
            });
        }
    } catch (error) {
        return error;
    }
};

export default userRegister;
