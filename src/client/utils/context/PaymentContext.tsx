import { createContext, useState, useEffect } from 'react';

type PaymentContextType = {
    shipment: string;
    shipmentServices: string;
    shippingCost: number;
    payment: string;
    isCompleted: boolean;
    setShipment: (shipment: string) => void;
    setShipmentServices: (shipmentServices: string) => void;
    setShippingCost: (shippingCost: number) => void;
    setPayment: (payment: string) => void;
    setCompleted: (isComplete: boolean) => void;
};

const PaymentContext = createContext<PaymentContextType>({
    shipment: 'JNE' || 'POS' || 'TIKI',
    shipmentServices: '',
    payment: 'BCA' || 'BRI',
    isCompleted: false,
    shippingCost: 0,
    setShipment: () => {},
    setShipmentServices: () => {},
    setShippingCost: () => {},
    setPayment: () => {},
    setCompleted: () => {},
});

export const PaymentProvider = ({ children }: { children: React.ReactNode }) => {
    const [shipment, setShipment] = useState<string>('');
    const [shipmentServices, setShipmentServices] = useState<string>('');
    const [shippingCost, setShippingCost] = useState<number>(0);
    const [payment, setPayment] = useState<string>('');
    const [isCompleted, setCompleted] = useState<boolean>(false);

    useEffect(() => {
        if (shipmentServices && payment) {
            setCompleted(true);
        }
    }, [shipmentServices, payment]);

    return (
        <PaymentContext.Provider
            value={{
                payment,
                shipment,
                isCompleted,
                shippingCost,
                shipmentServices,
                setPayment,
                setShipment,
                setCompleted,
                setShippingCost,
                setShipmentServices,
            }}
        >
            {children}
        </PaymentContext.Provider>
    );
};

export default PaymentContext;
