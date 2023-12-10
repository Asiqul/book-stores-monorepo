import BookCard from '@/components/elements/body/cards/BookCard';
import FilterFormSide from '@/components/elements/body/cards/FilterFormSide';
import FilterNav from '@/components/fragments/FilterNav';
import BaseLayout from '@/components/layouts/BaseLayout';
import useTitle from '@/utils/hooks/useTitle';
import useFetch from '@/utils/hooks/useFetch';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BooksDataType, CategoryType } from '@/types/data.type';
import { useEffect, useRef } from 'react';

export type CategoriesTypesProps = {
    id: number;
    name: string;
};

const Search = () => {
    useTitle('Cari Buku');

    const navigate = useNavigate();
    const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);
    const [newQuery] = useSearchParams();
    const search = newQuery.get('q') || '';
    const based_on = newQuery.get('based_on') || '';
    const limit = newQuery.get('limit') || 15;
    const page = newQuery.get('page') || 1;
    const categoryId = newQuery.get('categoryId');
    const offset = (Number(page) - 1) * Number(limit);

    const result = useFetch<{
        message: string;
        books: BooksDataType[];
        categories: CategoryType[];
        total_count: number;
        page_count: number;
    }>(`/api/books/search?q=${search}&based_on=${based_on}&limit=${limit}&page=${page}&categoryId=${categoryId}`);

    const books = result.data?.books;
    const category = result.data?.categories;

    console.log(result.data);

    const nextPage = () => {
        newQuery.set('page', '' + (Number(page) + 1));
        navigate(`/search?${newQuery.toString()}`);
    };

    const prevPage = () => {
        newQuery.set('page', '' + (Number(page) - 1));
        navigate(`/search?${newQuery.toString()}`);
    };

    const scrollToTop = () => {
        if (ref.current) {
            const barHeight = '200px';
            ref.current.style.scrollMargin = barHeight;
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        scrollToTop();
    }, [location]);

    return (
        <div ref={ref}>
            <BaseLayout>
                <div className="container mx-auto lg:flex gap-2 relative">
                    <FilterFormSide categories={category} />
                    <div className="flex flex-col justify-center items-center">
                        <div>
                            {books ? (
                                <>
                                    <div className="container mx-auto px-2  flex flex-col md:flex-row md:justify-around gap-6 md:gap-4">
                                        <FilterNav categories={category} slug={based_on} />
                                    </div>

                                    <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-8 sm:px-3 justify-center">
                                        {books?.map((book: any) => {
                                            const image = book.cover[0].cover;
                                            const author = book.author[0]?.name;
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
                                </>
                            ) : (
                                <div className="my-10 flex flex-col justify-center items-center">
                                    <img src="/icons/empty-order.png" alt="" width={300} height={300} />
                                    <h3 className="text-xl font-semibold text-center bg-transparent">
                                        Tidak ada buku yang ditemukan
                                    </h3>
                                    <p className="text-border brightness-50">
                                        Maaf, buku yang kamu cari tidak ditemukan.
                                    </p>
                                </div>
                            )}
                        </div>
                        {books && (
                            <div className="join my-3 shadow-md">
                                <button
                                    className="join-item btn btn-ghost bg-border bg-opacity-10 hover:bg-opacity-40 disabled:bg-border disabled:bg-opacity-40 disabled:text-border"
                                    onClick={prevPage}
                                    disabled={Number(page) === 1}
                                >
                                    «
                                </button>
                                <button className="join-item btn btn-ghost bg-border bg-opacity-10 hover:bg-opacity-40">{`${Number(
                                    page
                                )} / ${result.data?.page_count}`}</button>
                                <button
                                    className="join-item btn btn-ghost bg-border bg-opacity-10 hover:bg-opacity-40 disabled:bg-border disabled:bg-opacity-40 disabled:text-border"
                                    onClick={nextPage}
                                    disabled={Number(page) === result.data?.page_count}
                                >
                                    »
                                </button>
                            </div>
                        )}
                        {books && (
                            <span>
                                Menampilkan {Number(page) === 1 ? '1' : offset}-
                                {offset + Number(limit) > Number(result.data?.total_count)
                                    ? result.data?.total_count
                                    : offset + Number(limit)}{' '}
                                dari {result.data?.total_count}
                            </span>
                        )}
                    </div>
                </div>
            </BaseLayout>
        </div>
    );
};

export default Search;
