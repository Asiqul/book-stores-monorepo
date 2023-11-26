import express from 'express';
import getAllCity from '../../services/shipping/city';
import getAllProvince from '../../services/shipping/province';
const shippingRouter = express.Router();

shippingRouter.get('/province', getAllProvince);
shippingRouter.get('/city', getAllCity);

export default shippingRouter;
