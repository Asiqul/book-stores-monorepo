import { useState, useEffect } from 'react';
import axios from '@/utils/services/axiosInstance';

const CategoryItems = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const res = await axios.get('/api/books/category');
            setCategory(res.data.category);
        };
        getCategory();
    }, []);
    return (
        <div className="lg:grid lg:grid-cols-3 flex flex-col gap-3">
            {category?.map((cat: any) => (
                <li
                    key={cat.id}
                    className="md:text-sm lg:text-md hover:text-second transition duration-100 ease-in cursor-pointer border-b border-border border-opacity-10"
                >
                    {cat.name}
                </li>
            ))}
        </div>
    );
};

export default CategoryItems;
