import Cookies from 'js-cookie';
import useRupiah from '@/utils/hooks/useRupiah';
import ToastWrapper from '../toast/ToastWrapper';
import PaymentContext from '@/utils/context/PaymentContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '@/utils/services/axiosInstance';
import { useContext, useState } from 'react';

interface PaymentSummaryPropsType {
    book: any;
    disabled?: boolean;
    addressId: number | undefined;
}

const PaymentSummary = (props: PaymentSummaryPropsType) => {
    const navigate = useNavigate();

    const { book, disabled, addressId } = props;
    const { isCompleted, shippingCost } = useContext(PaymentContext);
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        setIsLoading(true);
        await axiosPrivate
            .post(
                '/api/user/checkout',
                {
                    bookId: book.book_id,
                    quantity: book.quantity,
                    address: addressId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('_bk_sess')}`,
                    },
                }
            )
            .then((res) => {
                if (res.status === 200) {
                    toast.success(res.data.message, {
                        onClose: () => {
                            navigate('/');
                        },
                    });
                }
            })
            .catch((err) => {
                toast.error(err.response.data.message, {
                    onClose: () => {
                        navigate(0);
                    },
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>
            <ToastWrapper />
            <div className="hidden lg:block lg:w-full rounded-lg bg-white absolute bottom-28 px-4 py-4">
                <h3 className="font-semibold text-sm my-2">Total Pembayaran</h3>
                <div className="flex justify-between bg-transparent">
                    <div className="flex flex-col gap-1 bg-transparent">
                        <h4 className="text-sm">Total Harga</h4>
                        <h4 className="text-sm">Total Biaya Pengiriman</h4>
                    </div>
                    <div className="flex flex-col gap-1 items-end bg-transparent">
                        <h4 className="text-sm">{useRupiah(book.total_price)}</h4>
                        <h4 className="text-sm">{shippingCost ? useRupiah(shippingCost) : '-'}</h4>
                    </div>
                </div>
            </div>
            <div className="bg-white border-t-2 border-border border-opacity-30 w-full bottom-0 left-0 fixed py-4 px-4 flex justify-between items-center lg:absolute lg:bottom-0 lg:rounded-lg lg:border-none z-50">
                <div className="bg-transparent">
                    <h3 className="font-semibold text-sm my-2">Total Pembayaran</h3>
                    <h1 className="text-tertiary">
                        {shippingCost ? useRupiah(book.total_price + shippingCost) : 'Rp -'}
                    </h1>
                </div>
                <button
                    className="h-12 flex w-36 items-center content-center justify-center text-lg text-white font-semibold uppercase border-2 border-second bg-second rounded-full hover:text-second hover:bg-white transsition duration-200 ease-in-out disabled:bg-border disabled:border-border disabled:text-white disabled:cursor-not-allowed"
                    disabled={(isCompleted && disabled ? false : true) || isLoading}
                    onClick={handleCheckout}
                >
                    {isLoading ? <span className="loading loading-spinner loading-md"></span> : 'Bayar'}
                </button>
            </div>
        </>
    );
};

export default PaymentSummary;
