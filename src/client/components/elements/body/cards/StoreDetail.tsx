type StoreDetailProps = {
    isOpen: boolean;
};

const StoreDetail = (props: StoreDetailProps) => {
    const isOpen = props.isOpen;
    return (
        <div
            className={`flex ${isOpen ? 'translate-y-0' : '-translate-y-52'}
        justify-between items-center py-5 px-6 bg-cards rounded-b-xl border-t-2 border-border border-opacity-50 transition duration-200 ease-in-out -z-50`}
        >
            <div className="bg-transparent flex flex-col gap-2">
                <h3 className="text-sm">Harga Barang</h3>
                <h3 className="text-sm">Ongkos Kirim</h3>
                <h3 className="text-sm">Total Pesanan</h3>
            </div>
            <div className="bg-transparent min-w-[100px] flex flex-col items-end gap-2">
                <h3 className="text-sm">Rp 20.000</h3>
                <h3 className="text-sm">Rp 9.000</h3>
                <h3 className="text-sm font-semibold">Rp 29.000</h3>
            </div>
        </div>
    );
};

export default StoreDetail;
