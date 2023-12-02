import axios from '../../utils/axiosInstance';
import { Request, Response } from 'express';

const getAllCity = async (req: Request, res: Response) => {
    const province = req.query.province;

    if (!province) {
        return res.status(400).json({
            status: 'Bad Request',
            message: 'Province is required',
        });
    }

    const response = await axios.get(`/city/?province=${province}`);
    if (response.data.rajaongkir.results.length > 0) {
        return res.status(200).json({
            status: 'OK',
            message: 'City found',
            city: response.data.rajaongkir.results,
        });
    } else {
        return null;
    }
};

export default getAllCity;
