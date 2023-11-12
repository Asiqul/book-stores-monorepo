import Subtitle from '../sliders/Subtitle';

const Subscriptions = () => {
    return (
        <>
            <div className="mt-6 py-8 lg:py-11 bg-cards">
                <div className="container mx-auto flex flex-col lg:flex-row gap-6 lg:gap-4 justify-center items-center">
                    <div className="lg:w-1/2 flex text-center justify-center lg:justify-normal items-center w-full">
                        <Subtitle title="Kejutan spesial dari kami hanya untukmu" expand={false} />
                    </div>
                    <div className="flex flex-row w-full lg:w-1/2 justify-center">
                        <div className="relative w-full">
                            <input
                                id="email"
                                type="email"
                                placeholder="Masukkan Email Anda Disini..."
                                className="p-4 w-full rounded-lg rounded-r-xl bg-white text-sm outline-none"
                            />
                            <button
                                id="email"
                                className="bg-second rounded-l-none py-3.5 px-6 lg:px-10 rounded-r-lg absolute right-0 hover:bg-tertiary transition duration-200 ease-in font-semibold text-white"
                            >
                                Daftar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subscriptions;
