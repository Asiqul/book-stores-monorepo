import bcrypt from 'bcrypt';
import prisma from '../../db/connection';
import login from '../../controllers/auth/login';
import { Request, Response } from 'express';

const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await prisma.users.findFirst({
        where: {
            email: email,
        },
    });
    if (!user) {
        return res.status(400).json({
            status: 'Bad Request',
            message: 'Email tidak terdaftar.',
        });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
        return res.status(400).json({
            status: 'Bad Request',
            message: 'Password tidak sesuai.',
        });
    }
    const { accessToken, refreshToken } = await login(user);
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.status(200).json({
        status: 'OK',
        message: 'User logged in',
        accessToken,
    });
};

export default userLogin;
