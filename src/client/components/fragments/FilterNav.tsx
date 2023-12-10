import { CategoriesTypesProps } from '@/pages/Search';
import FilterBar from '../elements/body/bars/FilterBar';
import FilterButton from '../elements/body/buttons/FilterButton';

const FilterNav = ({ categories, slug }: { categories: CategoriesTypesProps[] | undefined; slug: string }) => {
    return (
        <>
            <div className="container mx-auto px-2 flex flex-col gap-2">
                {slug === 'author' || slug === 'title' ? <FilterButton /> : null}
                <FilterBar categories={categories} />
            </div>
        </>
    );
};

export default FilterNav;
