import { useEffect, useState } from 'react';
import axios from '../services/axiosInstance';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useLocation } from 'react-router-dom';

const useFetch = <T,>(url: string, options?: AxiosRequestConfig) => {
    const location = useLocation();
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response: AxiosResponse<T> = await axios.get(url, options);
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [location]);

    return { data, error, isLoading };
};

export default useFetch;
