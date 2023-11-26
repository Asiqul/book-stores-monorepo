import Title from './Title';
import { AiOutlineClose } from 'react-icons/ai';

const FilterForm = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
    return (
        <>
            <div className={`modal ${open ? 'modal-open' : ''}`}>
                <div className="modal-box bg-white flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <Title />
                        <AiOutlineClose className="cursor-pointer" onClick={onClick} size={25} />
                    </div>
                    <div className="pl-3">
                        <h3 className="font-semibold">Kategori</h3>
                        <div className="">
                            <div className="pt-3">
                                <select
                                    className="select select-bordered w-full border-border font-normal bg-white"
                                    defaultValue={'Buku'}
                                >
                                    <option disabled>Kategory</option>
                                    <option>Komik Fiksi</option>
                                    <option>Novel</option>
                                    <option>Nonfiksi Dewasa</option>
                                </select>
                            </div>
                            <div className="pt-2">
                                <select
                                    className="select select-bordered border-border font-normal w-full bg-white"
                                    defaultValue={'Penulis'}
                                >
                                    <option disabled>Penulis</option>
                                    <option>Putri Cendana</option>
                                    <option>Tim Hinca</option>
                                    <option>Joko</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="pl-3">
                        <h3 className="font-semibold mt-3">Harga</h3>
                        <div className="relative mt-1">
                            <label htmlFor="default-search" className="mb-2 text-sm text-border font-medium">
                                Minimum
                            </label>
                            <label htmlFor="default-search" className="mb-2 font-semibold absolute top-9 left-3">
                                Rp
                            </label>
                            <input
                                type="text"
                                defaultValue={0}
                                className="input input-bordered border-border bg-white text-end w-full"
                            />
                        </div>
                        <div className="mt-3 relative">
                            <label htmlFor="default-search" className="mb-2 text-sm text-border font-medium">
                                Maximum
                            </label>
                            <label htmlFor="default-search" className="mb-2 font-semibold absolute top-9 left-3">
                                Rp
                            </label>
                            <input
                                type="text"
                                defaultValue={500000}
                                className="input input-bordered border-border bg-white text-end w-full"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <button className="btn btn-accent w-1/2">Filter</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FilterForm;
