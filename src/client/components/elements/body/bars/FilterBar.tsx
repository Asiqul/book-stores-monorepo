import { useState } from 'react';
import FilterForm from '../forms/FilterForm';

const FilterBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-4 lg:hidden">
                <button
                    className="btn btn-outline bg-white w-1/2 text-second font-heading font-normal"
                    onClick={() => setOpen(!open)}
                >
                    Filter
                </button>
                <FilterForm open={open} onClick={() => setOpen(!open)} />

                <select
                    className="select select-bordered border-border bg-white w-1/2 font-normal"
                    defaultValue={'Terbaru'}
                >
                    <option>Terbaru</option>
                    <option>Terpopuler</option>
                    <option>Harga Terendah</option>
                    <option>Harga Tertinggi</option>
                </select>
            </div>
        </>
    );
};

export default FilterBar;
