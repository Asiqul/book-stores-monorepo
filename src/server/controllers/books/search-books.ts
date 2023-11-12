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

        const search = await prisma.books.findMany({
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

        if (total_count === 0) {
            return search === null;
        }

        const page_count = Math.ceil(total_count / props.limit);
        return { search, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

export default searchBooks;
