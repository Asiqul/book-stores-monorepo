import Title from './Title';
import { CategoriesTypesProps } from '@/pages/Search';
import { AiOutlineClose } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';

interface FilterFormTypes {
    open: boolean;
    onClick: () => void;
    categories: CategoriesTypesProps[] | undefined;
}

const FilterForm: React.FC<FilterFormTypes> = ({ open, onClick, categories }) => {
    const [newQuery] = useSearchParams();
    const based_on = newQuery.get('based_on');
    return (
        <>
            <div className={`modal ${open ? 'modal-open' : ''}`}>
                <div className="modal-box bg-white flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <Title />
                        <AiOutlineClose className="cursor-pointer" onClick={onClick} size={25} />
                    </div>
                    <div className="pl-3">
                        <h3 className="font-semibold">Filter</h3>
                        <div className="">
                            <div className={`${based_on === 'category' ? 'hidden' : 'block'} pt-3`}>
                                <select
                                    className="select select-bordered w-full border-border font-normal bg-white"
                                    defaultValue={'Kategori'}
                                >
                                    <option disabled>Kategori</option>
                                    {categories?.map((category) => (
                                        <option key={category.id} value={category.name}>
                                            {category.name}
                                        </option>
                                    ))}
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
