import express from 'express';
import verifyAccess from '../../middlewares/verify-access';
import updateAddress from '../../controllers/users/update/address';
import profile from '../../controllers/users/profile';
import checkout from '../../controllers/users/checkout';
import history from '../../controllers/users/history';
import address from '../../controllers/users/address';
const usersRouter = express.Router();

usersRouter.get('/profile', verifyAccess, profile);
usersRouter.get('/history', verifyAccess, history);
usersRouter.get('/address', verifyAccess, address);

usersRouter.post('/checkout', verifyAccess, checkout);

usersRouter.put('/address', verifyAccess, updateAddress);

export default usersRouter;
