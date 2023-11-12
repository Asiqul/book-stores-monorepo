import Subtitle from '../sliders/Subtitle';

const Blogs = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="my-6">
                    <Subtitle title="Blog BukuKita" expand={false} />
                </div>
                <div className="md:flex">
                    <div>
                        <img
                            className="h-44 md:h-56 max-h-60 object-cover w-full"
                            src="/blogs/cover-sampul-rekomenadi-buku-anak.jpg"
                            alt="blog"
                            width={300}
                            height={300}
                        />
                        <p className="mt-2 text-xs text-border">BUKU ANAK</p>
                        <p className="text-sm md:text-md lg:text-xl font-bold text-tertiary">
                            10 Rekomendasi Buku Pelajaran dan Dongeng Anak untuk Meningkatkan Literasi Sejak Dini
                        </p>
                        <p className="mt-3 text-border text-xs">26 September 2023</p>
                    </div>

                    <div className="mt-10 md:ml-4 ml-0 md:mt-0">
                        <div className="flex flex-col flex-1">
                            <div className="flex">
                                <img
                                    className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] object-cover"
                                    src="/blogs/BOBO-01667.jpg"
                                    alt="blog"
                                    width={300}
                                    height={300}
                                />
                                <div className="ml-2">
                                    <p className="text-xs text-border">BUKU REKOMENDASI</p>
                                    <p className="text-tertiary text-sm md:text-md font-semibold">
                                        10 Rekomendasi Buku untuk Remaja, Mulai dari Fiksi sampai Nonfiksi
                                    </p>
                                    <p className="text-border text-xs">25 September 2023</p>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <img
                                    className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] object-cover"
                                    src="/blogs/Screenshot-2023-09-12-091713.png"
                                    alt="blog"
                                    width={300}
                                    height={300}
                                />
                                <div className="ml-2">
                                    <p className="text-xs text-border">PRE ORDER BUKU</p>
                                    <p className="text-tertiary text-sm md:text-md font-semibold">
                                        Majalah Bobo Edisi Koleksi 50 Tahun Cerpen dan Dongeng, Nostalgia Jilid Dua!
                                    </p>
                                    <p className="text-border text-xs">28 october 2023</p>
                                </div>
                            </div>

                            <div className="flex mt-4">
                                <img
                                    className="h-[100px] w-[100px] md:h-[120px] md:w-[120px] object-cover"
                                    src="/blogs/Screenshot-2023-09-25-103136.png"
                                    alt="blog"
                                    width={300}
                                    height={300}
                                />
                                <div className="ml-2">
                                    <p className="text-xs text-border">PROMO</p>
                                    <p className="text-tertiary text-sm md:text-md font-semibold">
                                        Things Left Behind: Sosialisasi dan Komunikasi Menyelamatkan Hidup
                                    </p>
                                    <p className="text-border text-xs">27 november 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
