import ProductContext from '@/utils/context/productContext';
import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const CheckoutCard = ({ price }: { price: number }) => {
    const { quantity, setQuantity } = useContext(ProductContext);

    const rupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    const handleIncrease = () => {
        setQuantity((c: number) => Math.min(c + 1, 5));
    };
    const handleDecrease = () => {
        setQuantity((c: number) => Math.max(c - 1, 1));
    };

    return (
        <>
            <div className="card sticky top-24 z-10 p-0 hidden lg:block w-[26%] h-[19rem]">
                <div className="py-8 px-4 bg-white rounded-xl">
                    <div className="bg-transparent">
                        <h2 className="font-semibold text-border">Ingin beli berapa?</h2>
                    </div>
                    <div className="mt-4 bg-transparent">
                        <h3 className="font-semibold text-sm">Jumlah Barang</h3>
                    </div>
                    <div className="bg-transparent flex mt-1 items-center">
                        <button className="bg-transparent rounded-full" onClick={handleDecrease}>
                            <IconContext.Provider
                                value={{
                                    className: 'fill-second rounded-full bg-transparent transition duration-200',
                                    size: '1.5rem',
                                }}
                            >
                                <BiSolidMinusCircle />
                            </IconContext.Provider>
                        </button>
                        <h4 className="w-10 text-center mr-[2px]">{quantity}</h4>
                        <button className="bg-transparent rounded-full" onClick={handleIncrease}>
                            <IconContext.Provider
                                value={{
                                    className: 'fill-second rounded-full bg-transparent transition duration-200',
                                    size: '1.2rem',
                                }}
                            >
                                <BsPlusCircleFill />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className="mt-6 py-6 flex flex-col gap-4 bg-transparent border-t-2 border-border border-opacity-50">
                        <div className="bg-transparent mb-2 flex flex-wrap gap-2 justify-between">
                            <h3 className="font-semibold text-sm">Total Harga</h3>
                            <h4 className="text-second font-semibold">{rupiah(price * quantity)}</h4>
                        </div>
                    </div>
                    <div className="bg-transparent w-full">
                        <Link to="/checkout">
                            <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
                                Beli Sekarang
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutCard;
