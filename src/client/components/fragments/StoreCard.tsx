import AddressForm from '../elements/body/modals/AddressForm';
import useRupiah from '@/utils/hooks/useRupiah';
import { UserAddressType } from '@/types/data.type';
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

type Book = {
    book_id: string;
    title: string;
    quantity: number;
    price: number;
    weight: number;
    cover: string;
    total_price: number;
};

interface StoreCardProps {
    book: Book;
    isOpen: boolean;
    address: UserAddressType | undefined;
    onClick: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({ isOpen, onClick, book, address }) => {
    const [isOpenAddress, setIsOpenAddress] = useState(false);

    return (
        <div>
            <div className="card card-body pb-4 px-6 bg-white gap-1">
                <h2 className="flex items-center gap-1 font-semibold text-sm text-opacity-60">
                    <IconContext.Provider value={{ className: 'fill-border', size: '1rem' }}>
                        <FaLocationDot />
                    </IconContext.Provider>
                    Alamat pengiriman
                </h2>

                {address ? (
                    <>
                        <h3 className="text-sm font-semibold">{address?.label}</h3>
                        <p className="text-md">{address?.recipient}</p>
                        <p className="text-sm">
                            {address?.full_address}, {address?.city}, {address?.district}, {address?.province},{' '}
                            {address?.postal_code}
                        </p>
                    </>
                ) : (
                    <p>Belum ada alamat yang terdaftar</p>
                )}

                <button
                    className="mt-2 py-2 w-3/5 font-semibold text-second bg-white border-second border-2 rounded-full hover:bg-second hover:text-white transition duration-200 ease-in-out"
                    onClick={() => setIsOpenAddress(!isOpenAddress)}
                >
                    + Tambah Alamat
                </button>

                <AddressForm open={isOpenAddress} onClick={() => setIsOpenAddress(!isOpenAddress)} />
            </div>
            <div className="card card-side bg-white rounded-xl mt-6 px-5 z-10">
                <figure className="bg-white">
                    <img src={book.cover} className="w-20 m-2" alt="Movie" />
                </figure>
                <div className="card-body rounded-t-xl bg-white pl-2.5">
                    <h2 className="card-title">Pesanan 1</h2>
                    <h3 className="text-sm font-semibold">{book.title}</h3>
                    <p className="text-sm">
                        Soft Cover - {book.quantity} Barang ({(book.weight * book.quantity).toFixed(2)} kg)
                    </p>
                    <div className="flex justify-end gap-1 my-3 bg-transparent">
                        <h2 className="text-tertiary text-lg font-semibold">{useRupiah(book.total_price)}</h2>
                    </div>
                    <div className="card-actions justify-end bg-transparent">
                        <button className="flex items-center gap-1 text-sm text-second" onClick={onClick}>
                            Detail Pesanan
                            <IconContext.Provider
                                value={{
                                    className: 'fill-second transition duration-200',
                                    size: '1rem',
                                }}
                            >
                                <IoIosArrowDropdownCircle style={{ transform: isOpen ? 'rotate(180deg)' : '' }} />
                            </IconContext.Provider>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreCard;
