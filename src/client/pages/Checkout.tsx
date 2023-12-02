import AuthTitle from '@/components/elements/auth/AuthTitle';
import StorePayment from '@/components/elements/body/bars/StorePayment';
import PaymentSummary from '@/components/elements/body/cards/PaymentSummary';
import StoreDetail from '@/components/elements/body/cards/StoreDetail';
import StoreCard from '@/components/fragments/StoreCard';
import MinLayout from '@/components/layouts/MinLayout';
import usePrivate from '@/utils/hooks/usePrivate';
import { UserAddressType } from '@/types/data.type';
import { NewAddressProvider } from '@/utils/context/NewAddressContext';
import { useEffect, useState } from 'react';
import { PaymentProvider } from '@/utils/context/PaymentContext';

export type Book = {
    book_id: string;
    title: string;
    quantity: number;
    price: number;
    weight: number;
    cover: string;
    total_price: number;
};

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [book, setBook] = useState<Book>({} as Book);

    const { data: shippingAddress } = usePrivate<{ message: string; data: UserAddressType }>('/api/user/main-address');

    useEffect(() => {
        const data = localStorage.getItem('session_book');
        data && setBook(JSON.parse(data));
    }, []);

    return (
        <MinLayout>
            <PaymentProvider>
                <NewAddressProvider>
                    <div className="container mx-auto">
                        <AuthTitle title="Checkout" />
                        <div className="lg:flex gap-8 items-center justify-between py-5  min-h-1/2">
                            <div className="lg:w-8/12">
                                <StoreCard
                                    isOpen={isOpen}
                                    onClick={() => setIsOpen(!isOpen)}
                                    book={book}
                                    address={shippingAddress?.data}
                                />
                                <StoreDetail isOpen={isOpen} book={book} />
                            </div>
                            <div className="hidden lg:block lg:w-2/5 lg:relative">
                                <StorePayment destination={shippingAddress?.data?.cityId} />
                                <PaymentSummary
                                    book={book}
                                    disabled={Boolean(shippingAddress?.data)}
                                    addressId={shippingAddress?.data?.id}
                                />
                            </div>
                            <div className="lg:hidden lg:w-2/5 lg:relative">
                                <StorePayment isOpen={isOpen} destination={shippingAddress?.data?.cityId} />
                                <PaymentSummary
                                    book={book}
                                    disabled={Boolean(shippingAddress?.data)}
                                    addressId={shippingAddress?.data?.id}
                                />
                            </div>
                        </div>
                    </div>
                </NewAddressProvider>
            </PaymentProvider>
        </MinLayout>
    );
};

export default Checkout;
