import { UserAddressType } from '@/types/data.type';
import ProfileContext from '@/utils/context/ProfileContext';
import React, { useContext } from 'react';

interface ProfileAddressProps {
    address: UserAddressType | [];
}

const ProfileAddress: React.FC<ProfileAddressProps> = ({ address }) => {
    const addressesToShow = Array.isArray(address) ? address : ([] as UserAddressType[]);

    const { isActive } = useContext(ProfileContext);

    return (
        <div
            className={`bg-white rounded-b-xl ${
                isActive === 'address' ? 'flex flex-col lg:flex-row' : 'hidden'
            } py-10  justify-center items-center gap-5`}
        >
            <div className="w-full flex flex-col lg:flex-row justify-center items-center">
                {addressesToShow?.length === 0 ? (
                    <>
                        <div>
                            <img
                                src="/icons/empty-order.png"
                                alt="empty-order"
                                className="max-w-xs"
                                width={100}
                                height={100}
                            ></img>
                        </div>
                        <div className="mt-10 md:mt-0 md:w-1/2 bg-transparent">
                            <h2 className="text-2xl font-semibold text-center bg-transparent">
                                Kamu belum menambahkan alamat.
                            </h2>
                            <p className="text-center my-4 bg-transparent">
                                Kamu masih belum pernah berbelanja, ayo mulai berbelanja sekarang. Gramedia memiliki
                                jutaan produk lainnya hanya untukmu. Yuk mulia belanja!
                            </p>
                        </div>
                    </>
                ) : (
                    <ul className="w-full px-3 py-6 -mt-8 flex flex-col gap-4 bg-transparent">
                        {addressesToShow?.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="px-2 py-3 bg-border bg-opacity-10 rounded-lg text-sm md:text-base"
                            >
                                <li className="font-semibold text-lg text-tertiary mb-2">{item.recipient}</li>
                                <li>{item.district + ' ' + item.postal_code}</li>
                                <li>{item.city + ' - ' + item.province}</li>
                                <li>{item.full_address}</li>
                            </div>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ProfileAddress;
