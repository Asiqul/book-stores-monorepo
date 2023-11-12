import { Request, Response } from 'express';
import recommendationsBooks from '../../controllers/books/recommendations';

const recommendBooks = async (req: Request, res: Response) => {
    const { page, limit } = req.query;
    try {
        if (!page && !limit) {
            const { books }: any = await recommendationsBooks();
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'recommendations',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { books, total_count, page_count }: any = await recommendationsBooks(Number(page), Number(limit));
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'recommendations',
                      page: Number(page),
                      per_page: Number(limit),
                      page_count,
                      total_count,
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        }
    } catch (error: any) {
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default recommendBooks;
