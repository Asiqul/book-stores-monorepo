import useRupiah from '@/utils/hooks/useRupiah';
import { Book } from '@/pages/Checkout';
import { useContext } from 'react';
import PaymentContext from '@/utils/context/PaymentContext';

type StoreDetailProps = {
    book: Book;
    isOpen: boolean;
};

const StoreDetail = (props: StoreDetailProps) => {
    const { isOpen, book } = props;
    const { shippingCost } = useContext(PaymentContext);

    return (
        <div
            className={`flex ${isOpen ? '-translate-y-2' : '-translate-y-32'}
        justify-between items-center py-6 px-6 bg-cards rounded-b-xl border-t-2 border-border border-opacity-50 transition duration-200 ease-in-out -z-50`}
        >
            <div className="bg-transparent flex flex-col gap-2">
                <h3 className="text-sm">Harga Barang</h3>
                <h3 className="text-sm">Ongkos Kirim</h3>
                <h3 className="text-sm">Total Pesanan</h3>
            </div>
            <div className="bg-transparent min-w-[100px] flex flex-col items-end gap-2">
                <h3 className="text-sm">{useRupiah(book.total_price)}</h3>
                <h3 className="text-sm">{shippingCost > 0 ? useRupiah(shippingCost) : '-'}</h3>
                <h3 className="text-sm font-semibold">
                    {shippingCost > 0 ? useRupiah(book.total_price + shippingCost) : '-'}
                </h3>
            </div>
        </div>
    );
};

export default StoreDetail;
