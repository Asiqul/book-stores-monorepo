import popularBooks from '../../controllers/books/populars';
import { Request, Response } from 'express';

const populars = async (req: Request, res: Response) => {
    const { page, limit } = req.query;
    try {
        if (!page && !limit) {
            const { books }: any = await popularBooks();
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'populars',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { books, total_count, page_count }: any = await popularBooks(Number(page), Number(limit));
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'populars',
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

export default populars;
