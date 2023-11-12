import internationalBooks from '../../controllers/books/international';
import { Request, Response } from 'express';

const intBooks = async (req: Request, res: Response) => {
    const { page, limit } = req.query;
    try {
        if (!page && !limit) {
            const { books }: any = await internationalBooks();
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'International Books',
                      books,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { books, total_count, page_count }: any = await internationalBooks(Number(page), Number(limit));
            books
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'International Books',
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

export default intBooks;
