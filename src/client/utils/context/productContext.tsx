import { createContext, useState } from 'react';

interface ProductContext {
    isActive: string;
    setIsActive: (isActive: string) => void;
    quantity: number;
    setQuantity: (quantity: number) => void;
}

const ProductContext = createContext<ProductContext>({
    isActive: 'Description',
    setIsActive: () => {},
    quantity: 1,
    setQuantity: () => {},
});

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [isActive, setIsActive] = useState('Description');
    const [quantity, setQuantity] = useState(1);

    return (
        <ProductContext.Provider value={{ isActive, setIsActive, quantity, setQuantity }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
