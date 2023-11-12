import BookCard from '@/components/elements/body/cards/BookCard';
import FilterFormSide from '@/components/elements/body/cards/FilterFormSide';
import FilterNav from '@/components/fragments/FilterNav';
import BaseLayout from '@/components/layouts/BaseLayout';
import useTitle from '@/utils/hooks/useTitle';
import useFetch from '@/utils/hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
    useTitle('Cari Buku');

    const [newQuery] = useSearchParams();
    const search = newQuery.get('q');
    const based_on = newQuery.get('based_on');
    const limit = newQuery.get('limit');
    const page = newQuery.get('page');

    const result = useFetch<any>(`/api/books/search?q=${search}&based_on=${based_on}&limit=${limit}&page=${page}`);
    const books = result.data?.books;

    return (
        <>
            <BaseLayout>
                <div className="container mx-auto lg:flex gap-2 relative">
                    <FilterFormSide />

                    <div>
                        <div className="container mx-auto px-2  flex flex-col md:flex-row md:justify-around gap-6 md:gap-4">
                            <FilterNav />
                        </div>

                        <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-8 sm:px-3 justify-center">
                            {books?.map((book: any) => {
                                const image = book.cover[0].cover;
                                const author = book.author[0].name;
                                return (
                                    <BookCard
                                        key={book.id}
                                        image={image}
                                        alt="Book"
                                        id={book.id}
                                        author={author}
                                        title={book.title}
                                        price={book.price}
                                        rating={book.rating}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default Search;
