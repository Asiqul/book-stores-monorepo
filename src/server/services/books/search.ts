import { SearchProps } from '../../types/props.type';
import searchAuthor from '../../controllers/books/search-author';
import searchBooks from '../../controllers/books/search-books';
import { Request, Response } from 'express';

const search = async (req: Request, res: Response) => {
    let { based_on, q, limit, page }: any = req.query;
    limit = parseInt(limit);
    limit ? (limit = limit) : (limit = 15);
    page = parseInt(page);
    page ? (page = page) : (page = 1);

    const searchProps: SearchProps = {
        query: q,
        page: page,
        limit: limit,
    };

    try {
        if (!q && !limit && !page) {
            return res.status(400).json({
                status: 'Bad Request',
                message: 'Query parameter is missing',
            });
        } else if (based_on === 'author') {
            const { bookSearch, catSearch, total_count, page_count }: any = await searchAuthor(searchProps);
            bookSearch && catSearch
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'Author',
                      page: page,
                      per_page: limit,
                      page_count,
                      total_count,
                      books: bookSearch,
                      categories: catSearch,
                  })
                : res.status(404).json({
                      status: 'Not Found',
                      message: 'Book not found',
                  });
        } else {
            const { bookSearch, catSearch, total_count, page_count }: any = await searchBooks(searchProps);
            bookSearch && catSearch
                ? res.status(200).json({
                      status: 'OK',
                      message: 'Books found',
                      take_by: 'Title',
                      page: page,
                      per_page: limit,
                      page_count,
                      total_count,
                      books: bookSearch,
                      categories: catSearch,
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

export default search;
