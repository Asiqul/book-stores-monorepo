import { CategoriesTypesProps } from '@/pages/Search';
import FilterForm from '../forms/FilterForm';
import useFiltering from '@/utils/hooks/useFiltering';
import { useState } from 'react';

const FilterBar = ({ categories }: { categories: CategoriesTypesProps[] | undefined }) => {
    const [open, setOpen] = useState(false);
    const { sortingFilter } = useFiltering();

    return (
        <>
            <div className="flex flex-row justify-center items-center gap-4 lg:hidden">
                <button
                    className="btn btn-outline bg-white w-1/2 text-second font-heading font-normal"
                    onClick={() => setOpen(!open)}
                >
                    Filter
                </button>
                <FilterForm categories={categories} open={open} onClick={() => setOpen(!open)} />

                <select
                    className="select select-bordered border-border bg-white w-1/2 font-normal"
                    defaultValue={'Terbaru'}
                    onChange={sortingFilter}
                >
                    <option value="newest">Terbaru</option>
                    <option value="popular">Terpopuler</option>
                    <option value="lowest">Harga Terendah</option>
                    <option value="highest">Harga Tertinggi</option>
                </select>
            </div>
        </>
    );
};

export default FilterBar;
