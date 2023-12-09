import ProfileContext from '@/utils/context/ProfileContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface OrderListProps {
    history: { history?: string }[];
}

const OrderList: React.FC<OrderListProps> = ({ history }) => {
    const { isActive } = useContext(ProfileContext);

    return (
        <div
            className={`bg-white rounded-b-xl ${
                isActive === 'order-list' ? 'flex flex-col lg:flex-row' : 'hidden'
            } py-10  justify-center items-center gap-5`}
        >
            {history?.length === 0 ? (
                <>
                    <div className="">
                        <img src="/icons/empty-order.png" alt="empty-order" className="" width={350} height={350}></img>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2 bg-transparent">
                        <h2 className="text-2xl font-semibold text-center bg-transparent">
                            Kamu belum pernah berbelanja.
                        </h2>
                        <p className="text-center my-4 bg-transparent">
                            Kamu masih belum pernah berbelanja, ayo segera tambahkan alamatmu dan mulai belanja!
                        </p>
                    </div>
                </>
            ) : (
                <ul className="w-full px-3 py-6 -mt-8 flex flex-col gap-4 bg-transparent">
                    {history.map((item: any) => (
                        <div
                            key={item.book.id}
                            className="px-2 py-3 bg-border bg-opacity-10 rounded-lg text-sm md:text-base"
                        >
                            <li className="font-semibold text-md text-tertiary mb-2">
                                <Link to={`/product/${item.book.id}`}>{item.book.title}</Link>
                            </li>

                            <li>{'Jumlah : ' + item.quantity}</li>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderList;
