import jwt from 'jsonwebtoken';

const createAccess = (user: any) => {
    const { id, name, email } = user;
    const accessKey = process.env.ACCESS_TOKEN_KEY || '';

    const accessToken = jwt.sign(
        {
            id,
            name,
            email,
        },
        accessKey,
        {
            expiresIn: '20s',
        }
    );

    return accessToken;
};

export default createAccess;
