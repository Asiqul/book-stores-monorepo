import { SearchProps } from '../../types/props.type';
import prisma from '../../db/connection';

const searchAuthor = async (props: SearchProps) => {
    try {
        const offset = (props.page - 1) * props.limit;
        const total_count = await prisma.books.count({
            where: {
                author: {
                    some: {
                        name: {
                            contains: props.query,
                        },
                    },
                },
            },
        });

        const books = await prisma.books.findMany({
            skip: offset,
            take: props.limit,
            where: {
                author: {
                    some: {
                        name: {
                            contains: props.query,
                        },
                    },
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
            return books === null;
        }
        const page_count = Math.ceil(total_count / props.limit);
        return { books, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

export default searchAuthor;
