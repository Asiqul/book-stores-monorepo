import Blogs from '@/components/elements/body/footers/Blogs';
import Brands from '@/components/elements/body/footers/Brands';
import Banner from '@/components/fragments/Banner';
import BaseLayout from '@/components/layouts/BaseLayout';
import useFetch from '@/utils/hooks/useFetch';
import BookView from '@/components/fragments/BookView';
import MinBookView from '@/components/fragments/MinBookView';

const Homepage = () => {
    const recommendBooks = useFetch<{ message: string; books: [] }>('/api/books/recommendations');

    const popularBooks = useFetch<{ message: string; books: [] }>('/api/books/popular');

    const favouritesBooks = useFetch<{ message: string; books: [] }>('/api/books/best-seller');

    const internasionalBooks = useFetch<{ message: string; books: [] }>('/api/books/international');

    return (
        <>
            <BaseLayout>
                <Banner />
                <MinBookView books={recommendBooks.data?.books} title="Rekomendasi Untukmu" />
                <BookView
                    books={popularBooks.data?.books}
                    title="Buku-Buku Populer"
                    banner="/banners/buku-populer.png"
                />
                <BookView
                    books={favouritesBooks.data?.books}
                    title="Buku Terlaris"
                    banner="/banners/fiksi-favorit.png"
                />
                <BookView
                    books={internasionalBooks.data?.books}
                    title="Buku Internasional"
                    banner="/banners/buku-internasional.png"
                />
                <Brands />
                <Blogs />
            </BaseLayout>
        </>
    );
};

export default Homepage;
