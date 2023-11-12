const PaymentSummary = () => {
    return (
        <>
            <div className="hidden lg:block lg:w-full rounded-lg bg-white absolute bottom-28 px-4 py-4">
                <h3 className="font-semibold text-sm my-2">Total Pembayaran</h3>
                <div className="flex justify-between bg-transparent">
                    <div className="flex flex-col gap-1 bg-transparent">
                        <h4 className="text-sm">Total Harga</h4>
                        <h4 className="text-sm">Total Biaya Pengiriman</h4>
                        <h4 className="text-sm">Biaya Asuransi</h4>
                    </div>
                    <div className="flex flex-col gap-1 items-end bg-transparent">
                        <h4 className="text-sm">Rp 20.000</h4>
                        <h4 className="text-sm">Rp 9.000</h4>
                        <h4 className="text-sm">Rp 0</h4>
                    </div>
                </div>
            </div>
            <div className="bg-white border-t-2 border-border border-opacity-30 w-full bottom-0 left-0 fixed py-4 px-4 flex justify-between items-center lg:absolute lg:bottom-0 lg:rounded-lg lg:border-none z-50">
                <div className="bg-transparent">
                    <h3 className="font-semibold text-sm my-2">Total Pembayaran</h3>
                    <h1 className="text-tertiary">Rp 29.000</h1>
                </div>
                <button className="py-2 text-lg text-white font-semibold uppercase border-2 border-second bg-second px-6 rounded-full hover:text-second hover:bg-white transsition duration-200 ease-in-out">
                    Bayar
                </button>
            </div>
        </>
    );
};

export default PaymentSummary;
