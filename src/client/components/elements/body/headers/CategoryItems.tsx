import axios from '@/utils/services/axiosInstance';
import { useState, useEffect } from 'react';

type CategoryList = {
    id: number;
    name: string;
};

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
            {category?.map((cat: CategoryList) => {
                return (
                    <a href={`/search?based_on=category&categoryId=${cat.id}`} key={cat.id}>
                        <li
                            key={cat.id}
                            className="md:text-sm lg:text-md hover:text-second transition duration-100 ease-in cursor-pointer border-b border-border border-opacity-10"
                        >
                            {cat.name}
                        </li>
                    </a>
                );
            })}
        </div>
    );
};

export default CategoryItems;
