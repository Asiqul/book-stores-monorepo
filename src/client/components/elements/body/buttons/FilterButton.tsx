import useFiltering from '@/utils/hooks/useFiltering';

const FilterButton = () => {
    const { isActive, authorFilter, productFilter } = useFiltering();
    return (
        <>
            <div>
                <div className="border-b-2 border-border border-opacity-30">
                    <div className={`flex flex-row justify-start items-center relative`}>
                        <button
                            className={`${
                                isActive === 'product' ? 'btn-accent' : 'btn-ghost'
                            } btn w-1/4 text-sm normal-case font-semibold btn-md`}
                            onClick={productFilter}
                        >
                            Produk
                        </button>
                        <button
                            className={`${
                                isActive === 'author' ? 'btn-accent' : 'btn-ghost'
                            } btn w-1/4 text-sm normal-case font-semibold`}
                            onClick={authorFilter}
                        >
                            Penulis
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterButton;
