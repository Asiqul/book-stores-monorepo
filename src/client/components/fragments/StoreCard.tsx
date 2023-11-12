import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import AddressForm from '../elements/body/modals/AddressForm';

type StoreCardProps = {
    isOpen: boolean;
    onClick: () => void;
};

const StoreCard = (props: StoreCardProps) => {
    const { isOpen, onClick } = props;
    const [isOpenAddress, setIsOpenAddress] = useState(false);

    return (
        <div>
            <div className="card card-body pb-4 px-6 bg-white">
                <h2 className="flex items-center gap-1 font-semibold text-sm text-opacity-60">
                    <IconContext.Provider value={{ className: 'fill-border', size: '1rem' }}>
                        <FaLocationDot />
                    </IconContext.Provider>
                    Alamat pengiriman
                </h2>
                <h3 className="text-sm font-semibold">Rejowinangun</h3>
                <p className="text-sm">
                    Kali Guji Kulon, RT 01 RW 03 Desa Rejowinangun, Kemiri, Kab. Purworejo, Jawa Tengah, 54262
                </p>
                <button
                    className="mt-2 py-2 w-3/5 font-semibold text-second bg-white border-second border-2 rounded-full hover:bg-second hover:text-white transition duration-200 ease-in-out"
                    onClick={() => setIsOpenAddress(!isOpenAddress)}
                >
                    + Tambah Alamat
                </button>
                <AddressForm open={isOpenAddress} onClick={() => setIsOpenAddress(!isOpenAddress)} />
            </div>
            <div className="card card-side bg-white rounded-b-none rounded-t-xl mt-6 px-5 z-10">
                <figure className="bg-white">
                    <img
                        src="https://books.google.com.sg/books/publisher/content?id=FSVTDwAAQBAJ&hl=id&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2pB7WWvKNb7hUAz7IcoXQ3vc4yCw&w=1280"
                        className="w-20 m-2"
                        alt="Movie"
                    />
                </figure>
                <div className="card-body rounded-t-xl bg-white pl-2.5">
                    <h2 className="card-title">Pesanan 1</h2>
                    <p className="text-sm">Eloquent JavaScript, Third Edition</p>
                    <p className="text-sm">Soft Cover - 1 Barang (0.315 kg)</p>
                    <div className="flex justify-end gap-1 my-3 bg-transparent">
                        <h2 className="text-tertiary text-lg font-semibold">Rp 20.000</h2>
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
