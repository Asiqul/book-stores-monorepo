import CheckoutBar from '@/components/elements/body/bars/CheckoutBar';
import CheckoutCard from '@/components/elements/body/cards/CheckoutCard';
import ImageCard from '@/components/elements/body/cards/ImageCard';
import Loading from '@/components/elements/body/modals/Loading';
import BookDetail from '@/components/fragments/BookDetail';
import BaseLayout from '@/components/layouts/BaseLayout';
import useFetch from '@/utils/hooks/useFetch';
import useCounter from '@/utils/hooks/useCounter';
import MinBookView from '@/components/fragments/MinBookView';
import { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { bookId } = useParams();
    const { quantity } = useCounter();
    const ref = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const scrollToTop = () => {
        if (ref.current) {
            const barHeight = '160px';
            ref.current.style.scrollMargin = barHeight;
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const book = useFetch<any>(`/api/books/${bookId}`);

    const recommendBooks = useFetch<{ message: string; books: [] }>('/api/books/recommendations');

    const otherBooks = useFetch<{ message: string; books: [] }>('/api/books/best-seller');

    const inputCart = {
        book_id: book.data?.id,
        title: book.data?.title,
        cover: book.data?.cover[0].cover,
        price: book.data?.price,
        weight: book.data?.weight,
        quantity,
        total_price: book.data?.price * quantity,
    };

    useEffect(() => {
        scrollToTop();
    }, [location]);
    useEffect(() => {
        localStorage.setItem('session_book', JSON.stringify(inputCart));
    }, [inputCart]);

    return (
        <div ref={ref}>
            <BaseLayout>
                {book.isLoading && <Loading />}
                <div>
                    <div>
                        <div className="container mx-auto px-2 mt-36 flex flex-col md:flex-row md:justify-around gap-6 md:gap-4">
                            <ImageCard cover={book.data?.cover} />
                            <BookDetail book={book.data} />
                            <CheckoutCard price={book.data?.price} />
                        </div>
                        <CheckoutBar price={book.data?.price} />
                    </div>
                    <MinBookView books={recommendBooks.data?.books} title="Rekomendasi Untukmu" />
                    <MinBookView
                        books={otherBooks.data?.books}
                        title="Produk Lainnya"
                        background="bg-cards_wrapper rounded-xl"
                    />
                </div>
            </BaseLayout>
        </div>
    );
};

export default ProductDetail;
