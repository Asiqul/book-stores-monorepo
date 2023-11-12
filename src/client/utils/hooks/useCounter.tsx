import { useContext } from 'react';
import ProductContext from '../context/productContext';

const useCounter = () => {
    const { quantity, setQuantity } = useContext(ProductContext);

    const increment = () => setQuantity((c: number) => Math.min(c + 1, 5));
    const decrement = () => setQuantity((c: number) => Math.max(c - 1, 1));

    return {
        quantity,
        increment,
        decrement,
    };
};

export default useCounter;
