const useRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        minimumFractionDigits: 0,
        currency: 'IDR',
    }).format(number);
};

export default useRupiah;
