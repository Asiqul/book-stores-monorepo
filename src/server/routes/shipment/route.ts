import express from 'express';
import getAllCity from '../../services/shipping/city';
import getAllProvince from '../../services/shipping/province';
import getCostDetail from '../../services/shipping/cost';
const shippingRouter = express.Router();

shippingRouter.get('/province', getAllProvince);
shippingRouter.get('/city', getAllCity);
shippingRouter.get('/cost', getCostDetail);

export default shippingRouter;
