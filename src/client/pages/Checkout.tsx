import AuthTitle from '@/components/elements/auth/AuthTitle';
import StorePayment from '@/components/elements/body/bars/StorePayment';
import PaymentSummary from '@/components/elements/body/cards/PaymentSummary';
import StoreDetail from '@/components/elements/body/cards/StoreDetail';
import StoreCard from '@/components/fragments/StoreCard';
import MinLayout from '@/components/layouts/MinLayout';
import { useState } from 'react';

const Checkout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MinLayout>
            <div className="container mx-auto min-h-screen">
                <AuthTitle title="Checkout" />
                <div className="lg:flex gap-8 items-center justify-between py-5  min-h-1/2">
                    <div className="lg:w-8/12">
                        <StoreCard isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                        <StoreDetail isOpen={isOpen} />
                    </div>
                    <div className="hidden lg:block lg:w-2/5 lg:relative">
                        <StorePayment />
                        <PaymentSummary />
                    </div>
                    <div className="lg:hidden lg:w-2/5 lg:relative">
                        <StorePayment isOpen={isOpen} />
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        </MinLayout>
    );
};

export default Checkout;
