import PaymentContext from '@/utils/context/PaymentContext';
import StoreModal from '../modals/StoreModal';
import { useState, useEffect, useContext } from 'react';
import { ShipmentCostType } from '@/types/data.type';
import axios from '@/utils/services/axiosInstance';
import ShipmentAccordion from '../accordions/ShipmentAccordion';

type StorePaymentProps = {
    isOpen?: boolean;
    destination: number | undefined;
};

const StorePayment = (props: StorePaymentProps) => {
    const { isOpen, destination } = props;
    const { shipment, setShippingCost } = useContext(PaymentContext);
    const [isCostLoad, setIsCostLoad] = useState(false);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);
    const [isShipmentOpen, setIsShipmentOpen] = useState(false);
    const [shipmentServices, setShipmentServices] = useState<ShipmentCostType[]>();

    const book = localStorage.getItem('session_book');
    const data = book && JSON.parse(book);
    const weight = data?.weight * 1000;

    useEffect(() => {
        if (destination && shipment) {
            const getCost = async () => {
                const response = await axios.get(
                    `/api/shipment/cost/?destination=${destination}&weight=${weight}&courier=${shipment.toLocaleLowerCase()}`
                );
                setShipmentServices(response.data.cost_details);
                setIsCostLoad(false);
            };
            setIsCostLoad(true);
            setShippingCost(0);
            setShipmentServices(undefined);
            getCost();
        }
    }, [shipment, destination]);

    return (
        <>
            <StoreModal open={isPaymentOpen} onClick={() => setIsPaymentOpen(false)} title="Metode Pembayaran" />
            <StoreModal open={isShipmentOpen} onClick={() => setIsShipmentOpen(false)} title="Metode Pengiriman" />
            <div
                className={`card card-body p-4  bg-white mt-6 mb-32 transition duration-200 ease-in-out ${
                    isOpen ? 'flex translate-y-0' : 'flex -translate-y-32'
                }`}
            >
                <div className="bg-transparent">
                    <h2 className="font-semibold my-3">Metode Pengiriman</h2>
                    <button
                        className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out"
                        onClick={() => setIsShipmentOpen(!isShipmentOpen)}
                    >
                        {isCostLoad ? (
                            <div className="w-full flex justify-center gap-2">
                                <span className="loading loading-spinner loading-sm"></span>
                                <span>Memuat...</span>
                            </div>
                        ) : (
                            'Pilih Metode Pengiriman'
                        )}
                    </button>
                </div>

                {shipmentServices && <ShipmentAccordion services={shipmentServices} />}

                <div className="bg-transparent relative">
                    <h2 className="font-semibold my-3">Metode pembayaran</h2>
                    <button
                        className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out"
                        onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                    >
                        Pilih Metode Pembayaran
                    </button>
                </div>
            </div>
        </>
    );
};

export default StorePayment;
