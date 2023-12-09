import { Request, Response } from 'express';
import prisma from '../../db/connection';

const getByCategory = async (req: Request, res: Response, { limit, page }: any) => {
    const { categoryId }: any = req.query;
    try {
        const offset = (page - 1) * limit;
        const total_count = await prisma.books.count({
            where: {
                category: {
                    some: {
                        id: parseInt(categoryId),
                    },
                },
            },
        });

        const bookSearch = await prisma.books.findMany({
            skip: offset,
            take: limit,
            where: {
                category: {
                    some: {
                        id: parseInt(categoryId),
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

        const authorSearch = await prisma.author.findMany({
            where: {
                books: {
                    some: {
                        category: {
                            some: {
                                id: parseInt(categoryId),
                            },
                        },
                    },
                },
            },
        });

        if (total_count === 0) {
            return bookSearch === null;
        }

        const page_count = Math.ceil(total_count / limit);
        return { bookSearch, authorSearch, total_count, page_count };
    } catch (error) {
        throw error;
    }
};

export default getByCategory;
