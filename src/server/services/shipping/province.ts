import axios from '../../utils/axiosInstance';
import { Request, Response } from 'express';

const getAllProvince = async (req: Request, res: Response) => {
    const response = await axios.get(`/province`);
    return res.status(200).json({
        status: 'OK',
        message: 'Province found',
        province: response.data.rajaongkir.results,
    });
};

export default getAllProvince;
