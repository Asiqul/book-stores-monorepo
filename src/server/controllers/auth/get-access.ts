import { Users } from '@prisma/client';
import { Request, Response } from 'express';
import createAccess from './utils/create-access';

const getAccess = async (req: Request, res: Response) => {
    const user: Users = req.body.user;
    const accessToken = createAccess(user);
    res.status(202).json({
        status: 'Accepted',
        message: 'New access token created',
        accessToken: accessToken,
    });
};

export default getAccess;
