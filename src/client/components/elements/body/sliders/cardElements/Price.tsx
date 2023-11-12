const Price = ({ price }: { price: number }) => {
    const formatPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    }).format(price);

    return (
        <>
            <div className="mt-1">
                <h4 className="text-md font-semibold text-second text-left">{formatPrice}</h4>
            </div>
        </>
    );
};

export default Price;
