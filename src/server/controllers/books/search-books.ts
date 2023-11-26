import { SearchProps } from '../../types/props.type';
import prisma from '../../db/connection';

const searchBooks = async (props: SearchProps) => {
    try {
        const offset = (props.page - 1) * props.limit;
        const total_count = await prisma.books.count({
            where: {
                title: {
                    contains: props.query,
                },
            },
        });

        const bookSearch = await prisma.books.findMany({
            skip: offset,
            take: props.limit,
            where: {
                title: {
                    contains: props.query,
                },
            },
            select: {
                id: true,
                title: true,
                author: {
                    select: {
                        name: true,
                    },
                },
                price: true,
                rating: true,
                cover: {
                    take: 1,
                    select: {
                        cover: true,
                    },
                },
            },
        });

        const catSearch = await prisma.category.findMany({
            where: {
                books: {
                    some: {
                        title: {
                            contains: props.query,
                        },
                    },
                },
            },
        });

        if (total_count === 0) {
            return bookSearch === null;
        }

        const page_count = Math.ceil(total_count / props.limit);
        return { bookSearch, catSearch, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

export default searchBooks;
