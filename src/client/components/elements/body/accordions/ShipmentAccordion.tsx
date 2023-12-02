import PaymentContext from '@/utils/context/PaymentContext';
import useRupiah from '@/utils/hooks/useRupiah';
import { ShipmentCostType } from '@/types/data.type';
import { useContext } from 'react';

const ShipmentAccordion = ({ services }: { services: ShipmentCostType[] }) => {
    const { shipmentServices, setShipmentServices, shipment, setShippingCost } = useContext(PaymentContext);

    return (
        <div className="w-full my-3 flex flex-col items-center gap-4">
            {services.map((service, index) => (
                <div className="collapse max-w-xs" key={index}>
                    <input
                        type="radio"
                        name="select"
                        onClick={() => {
                            setShipmentServices(service.service);
                            setShippingCost(service.cost[0].value);
                        }}
                    />
                    <div
                        className={`collapse-title ${
                            shipmentServices === service.service ? 'bg-cards_wrapper' : 'bg-border  bg-opacity-25'
                        } px-4 py-2 flex items-center text-md font-medium`}
                    >
                        <div className="w-full flex flex-col items-center">
                            <span className="text-md font-semibold">{shipment + ' - ' + service.service}</span>
                            <span className="text-sm">{service.description}</span>
                            {service.cost.map((cost, index) => (
                                <div className="w-full flex justify-between" key={index}>
                                    <div className="flex flex-col">
                                        <span className="text-sm">Estimasi Pengiriman</span>
                                        <span className="text-sm">Biaya Pengiriman</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm">{cost.etd} hari</span>
                                        <span className="text-sm">{useRupiah(cost.value)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShipmentAccordion;
