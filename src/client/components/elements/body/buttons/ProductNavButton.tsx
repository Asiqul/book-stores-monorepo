import ProductContext from '@/utils/context/ProductContext';
import { useContext } from 'react';

const ProductNavButton = () => {
    const { isActive, setIsActive } = useContext(ProductContext);
    return (
        <>
            <div className="mt-6 border-b-2 border-border border-opacity-50 bg-transparent">
                <button
                    className={`px-4 py-2 ${
                        isActive === 'Description' ? 'text-second border-b-2' : ' border-b-2 border-transparent'
                    } hover:text-second transition-all duration-500 ease-in-out bg-transparent font-semibold`}
                    onClick={() => setIsActive('Description')}
                >
                    Deskripsi Buku
                </button>
                <button
                    className={`px-4 py-2 ${
                        isActive === 'Detail' ? 'text-second border-b-2' : ' border-b-2 border-transparent'
                    } hover:text-second transition-all duration-500 ease-in-out bg-transparent font-semibold`}
                    onClick={() => setIsActive('Detail')}
                >
                    Detail Buku
                </button>
            </div>
        </>
    );
};

export default ProductNavButton;
