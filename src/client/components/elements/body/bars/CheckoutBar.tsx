import { IconContext } from 'react-icons';
import { BiSolidMinusCircle } from 'react-icons/bi';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useCounter from '@/utils/hooks/useCounter';

const CheckoutBar = ({ price }: { price: number }) => {
    const { increment, decrement, quantity } = useCounter();

    const rupiah = (number: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number);
    };

    return (
        <>
            <div className="sticky lg:hidden container mx-auto -bottom-3 left-0 rounded-xl py-3 px-2 mt-3 z-10">
                <div className="bg-white w-full border-t-2 border-border border-opacity-20 rounded-t-xl px-2 py-1">
                    <div className="flex flex-col items-center">
                        <div className="bg-transparent w-full flex justify-between items-center py-1.5 border-b-2 border-border border-opacity-20">
                            <h2 className="font-semibold">Jumlah Barang</h2>
                            <div className="bg-transparent flex mt-1 items-center">
                                <button className="bg-transparent rounded-full" onClick={decrement}>
                                    <IconContext.Provider
                                        value={{
                                            className:
                                                'fill-second rounded-full bg-transparent transition duration-200',
                                            size: '1.9rem',
                                        }}
                                    >
                                        <BiSolidMinusCircle />
                                    </IconContext.Provider>
                                </button>
                                <h4 className="w-10 text-center mr-[2px]">{quantity}</h4>
                                <button className="bg-transparent rounded-full" onClick={increment}>
                                    <IconContext.Provider
                                        value={{
                                            className:
                                                'fill-second rounded-full bg-transparent transition duration-200',
                                            size: '1.6rem',
                                        }}
                                    >
                                        <BsPlusCircleFill />
                                    </IconContext.Provider>
                                </button>
                            </div>
                        </div>
                        <div className="bg-transparent w-full flex justify-between py-4">
                            <h3 className="font-semibold text-sm">Total Harga</h3>
                            <h4 className="text-second font-semibold">{rupiah(price * quantity)}</h4>
                        </div>
                        <div className="bg-transparent w-1/2 pb-6">
                            <Link to="/checkout">
                                <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
                                    Beli Sekarang
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutBar;
