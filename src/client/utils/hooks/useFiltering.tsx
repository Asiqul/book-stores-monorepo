import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const useFiltering = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(' ');
    const [queryParams] = useSearchParams();
    const based_on = queryParams.get('based_on');

    useEffect(() => {
        based_on === 'title' ? setIsActive('product') : setIsActive('author');
    }, []);

    const authorFilter = () => {
        setIsActive('author');
        queryParams.set('based_on', 'author');
        queryParams.set('q', queryParams.get('q') || '');
        navigate(`/search?${queryParams.toString()}`);
    };

    const productFilter = () => {
        setIsActive('product');
        queryParams.set('based_on', 'title');
        queryParams.set('q', queryParams.get('q') || '');
        navigate(`/search?${queryParams.toString()}`);
    };

    const sortingFilter = (e: React.FormEvent<HTMLSelectElement>) => {
        e.preventDefault();
        queryParams.set('sort_by', e.currentTarget.value);
        navigate(`/search?${queryParams.toString()}`);
    };

    return {
        isActive,
        authorFilter,
        productFilter,
        sortingFilter,
    };
};

export default useFiltering;
