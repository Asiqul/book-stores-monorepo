import prisma from '../../db/connection';
import createAccess from './utils/create-access';
import createToken from './utils/create-token';

const login = async (user: any) => {
    const accessToken = createAccess(user);
    const refreshToken = createToken(user);
    await prisma.users.update({
        where: {
            id: user.id,
        },
        data: {
            refresh_token: refreshToken,
        },
    });
    return { accessToken, refreshToken };
};

export default login;
