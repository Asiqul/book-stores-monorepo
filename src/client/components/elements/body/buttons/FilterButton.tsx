const FilterButton = () => {
    return (
        <>
            <div>
                <div className="border-b-2 border-border border-opacity-30">
                    <div className={`flex flex-row justify-start items-center relative`}>
                        <button className={`btn btn-ghost w-1/4 text-sm normal-case font-semibold btn-md`}>
                            Produk
                        </button>
                        <button className={`btn btn-ghost w-1/4 text-sm normal-case font-semibold`}>Penulis</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterButton;
