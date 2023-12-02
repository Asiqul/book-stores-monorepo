import axios from '../../utils/axiosInstance';
import { Request, Response } from 'express';

const getCostDetail = async (req: Request, res: Response) => {
    let { destination, weight, courier } = req.query;

    if (!destination || !weight || !courier) {
        return res.status(400).json({
            status: 'Bad Request',
            message: 'Origin, destination, weight, and courier are required',
        });
    }

    const response = await axios.post(`/cost`, {
        origin: '152',
        destination: destination,
        weight: Number(weight),
        courier: courier,
    });

    return res.status(200).json({
        status: 'OK',
        message: 'Province found',
        origin: response.data.rajaongkir.origin_details,
        destination: response.data.rajaongkir.destination_details,
        cost_details: response.data.rajaongkir.results[0].costs,
    });
};

export default getCostDetail;
