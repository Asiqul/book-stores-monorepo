type StorePaymentProps = {
    isOpen?: boolean;
};

const StorePayment = (props: StorePaymentProps) => {
    const isOpen = props.isOpen;
    return (
        <div
            className={`card card-body p-4  bg-white mt-6 mb-32 transition duration-200 ease-in-out ${
                isOpen ? 'flex translate-y-0' : 'flex -translate-y-32'
            }`}
        >
            <div className="bg-transparent">
                <h2 className="font-semibold my-3">Metode Pengiriman</h2>
                <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
                    Pilih Metode Pengiriman
                </button>
            </div>
            <div className="bg-transparent relative">
                <h2 className="font-semibold my-3">Metode pembayaran</h2>
                <button className="w-full py-2 text-second font-semibold rounded-full border-2 border-second hover:bg-second hover:text-white transition duration-200 ease-in-out">
                    Pilih Metode Pembayaran
                </button>
            </div>
        </div>
    );
};

export default StorePayment;
