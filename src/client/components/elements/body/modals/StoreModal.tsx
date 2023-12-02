import ModalTitle from './ModalTitle';
import PaymentContext from '@/utils/context/PaymentContext';
import { AiOutlineClose } from 'react-icons/ai';
import { useContext } from 'react';

const courierList = [
    {
        id: 1,
        code: 'JNE',
        name: 'JNE Express',
        icon: '/icons/JNE.svg',
    },
    {
        id: 2,
        code: 'POS',
        name: 'Pos Indonesia',
        icon: '/icons/POS.svg',
    },
    {
        id: 3,
        code: 'TIKI',
        name: 'TIKI Express',
        icon: '/icons/TIKI.svg',
    },
];

const paymentList = [
    {
        id: 1,
        code: 'BCA',
        name: 'Bank Central Asia',
        icon: '/icons/BCA.svg',
    },
    {
        id: 2,
        code: 'BRI',
        name: 'Bank Rakyat Indonesia',
        icon: '/icons/BRI.svg',
    },
];

interface StoreModalPropsType {
    title: string;
    open: boolean;
    onClick: () => void;
}

const StoreModal: React.FC<StoreModalPropsType> = ({ title, open, onClick }) => {
    const { shipment, setShipment, payment, setPayment } = useContext(PaymentContext);

    return (
        <div className={`modal ${open ? 'modal-open' : ''}`}>
            <div className="modal-box bg-white">
                <button onClick={onClick}>
                    <AiOutlineClose size={20} />
                </button>
                <ModalTitle title={title} />

                <div className="flex flex-col gap-4 justify-center mt-4">
                    {title === 'Metode Pengiriman'
                        ? courierList.map((courier) => (
                              <div className="collapse" key={courier.id}>
                                  <input
                                      type="radio"
                                      name="select"
                                      onClick={() => {
                                          setShipment(courier.code);
                                          onClick();
                                      }}
                                  />
                                  <div
                                      className={`collapse-title ${
                                          shipment === courier.code ? 'bg-cards_wrapper' : 'bg-border  bg-opacity-25'
                                      } flex items-center justify-between text-xl font-medium`}
                                  >
                                      <div className="flex items-center">
                                          <img src={courier.icon} alt={courier.code} width={40} height={40} />
                                          <span className="ml-2 text-md">{courier.name}</span>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : paymentList.map((paymentMethod) => (
                              <div className="collapse" key={paymentMethod.id}>
                                  <input
                                      type="radio"
                                      name="select"
                                      onClick={() => {
                                          setPayment(paymentMethod.code);
                                          onClick();
                                      }}
                                      value={paymentMethod.code}
                                  />
                                  <div
                                      className={`collapse-title ${
                                          payment === paymentMethod.code
                                              ? 'bg-cards_wrapper'
                                              : 'bg-border  bg-opacity-25'
                                      } flex items-center justify-between text-xl font-medium`}
                                  >
                                      <div className="flex items-center">
                                          <img
                                              src={paymentMethod.icon}
                                              alt={paymentMethod.code}
                                              width={40}
                                              height={40}
                                          />
                                          <span className="ml-2 text-md">{paymentMethod.name}</span>
                                      </div>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>
        </div>
    );
};

export default StoreModal;
