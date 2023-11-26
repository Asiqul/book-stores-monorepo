import { useEffect, useState } from 'react';
import { axiosPrivate } from '../services/axiosInstance';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const usePrivate = <T,>(url: string, options?: any) => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response: AxiosResponse<T> = await axiosPrivate.get(url, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_bk_sess')}`,
                    },
                });
                setData(response.data);
            } catch (error: any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, error, isLoading };
};

export default usePrivate;
