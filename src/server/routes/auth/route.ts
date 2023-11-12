import express from 'express';
import userRegister from '../../services/auth/register';
import userLogin from '../../services/auth/login';
import logout from '../../controllers/auth/logout';
import verifyEmail from '../../middlewares/verify-email';
import verifyPassword from '../../middlewares/verify-password';
import verifyToken from '../../middlewares/verify-token';
import verifyAccess from '../../middlewares/verify-access';
import getAccess from '../../controllers/auth/get-access';
const authRouter = express.Router();

authRouter.get('/access', verifyToken, getAccess);

authRouter.post('/register', verifyEmail, verifyPassword, userRegister);
authRouter.post('/login', verifyEmail, userLogin);

authRouter.delete('/logout', verifyAccess, verifyToken, logout);

export default authRouter;
