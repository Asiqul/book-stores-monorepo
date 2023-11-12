import FilterBar from '../elements/body/bars/FilterBar';
import FilterButton from '../elements/body/buttons/FilterButton';

const FilterNav = () => {
    return (
        <>
            <div className="container mx-auto px-2 flex flex-col gap-2">
                <FilterButton />
                <FilterBar />
            </div>
        </>
    );
};

export default FilterNav;
