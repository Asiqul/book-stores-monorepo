import prisma from '../../db/connection';
import { Request, Response } from 'express';

const category = async (req: Request, res: Response) => {
    const category = await prisma.category.findMany();
    return res.status(200).json({
        status: 'OK',
        message: 'Category found',
        category,
    });
};

export default category;
