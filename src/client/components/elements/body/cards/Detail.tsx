const Detail = ({ book }: { book: any }) => {
    return (
        <>
            <div className="flex flex-row my-3 bg-transparent">
                <ul className="flex flex-col gap-5 w-1/2">
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Jumlah Halaman</span>
                        <span>{book?.pages}</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Terbit</span>
                        <span>{book?.published}</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Bahasa</span>
                        <span>Indonesia</span>
                    </li>
                </ul>
                <ul className="flex flex-col gap-5 w-1/2">
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Penerbit</span>
                        <span>{book?.publisher?.map((item: any) => item.name + ' ')}</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Berat</span>
                        <span>{book?.weight + ' kg'}</span>
                    </li>
                    <li className="grid grid-cols-1 bg-transparent">
                        <span className="text-heading font-semibold text-sm text-border">Rating</span>
                        <span>{book?.rating}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Detail;
