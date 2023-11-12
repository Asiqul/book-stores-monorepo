import jwt from 'jsonwebtoken';

const createToken = (user: any) => {
    const { id, name } = user;
    const refreshKey = process.env.REFRESH_TOKEN_KEY || '';

    const refreshToken = jwt.sign(
        {
            id,
            name,
        },
        refreshKey,
        {
            expiresIn: '1d',
        }
    );
    return refreshToken;
};

export default createToken;
