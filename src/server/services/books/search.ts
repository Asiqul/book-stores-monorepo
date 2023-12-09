import { SearchProps } from '../../types/props.type';
import searchAuthor from '../../controllers/books/search-author';
import searchBooks from '../../controllers/books/search-books';
import { Request, Response } from 'express';
import recommendBooks from './recommendations';
import populars from './populars';
import bestSale from './best-sale';
import intBooks from './inter-books';
import getByCategory from '../../controllers/books/get-by-category.ts';

const search = async (req: Request, res: Response) => {
    let { based_on, categoryId, q, limit, page }: any = req.query;
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
        // if (!q && !limit && !page) {
        //     return res.status(400).json({
        //         status: 'Bad Request',
        //         message: 'Query parameter is missing',
        //     });
        // }

        switch (based_on) {
            case 'author': {
                const { bookSearch, catSearch, total_count, page_count }: any = await searchAuthor(searchProps);
                return bookSearch && catSearch
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
            }

            case 'recommendations':
                return recommendBooks(req, res);
            case 'populars':
                return populars(req, res);
            case 'best-seller':
                return bestSale(req, res);
            case 'international':
                return intBooks(req, res);
            case 'category': {
                const { bookSearch, authorSearch, total_count, page_count }: any = await getByCategory(req, res, {
                    limit,
                    page,
                });
                return bookSearch && authorSearch
                    ? res.status(200).json({
                          status: 'OK',
                          message: 'Books found',
                          take_by: 'Category',
                          page: page,
                          per_page: limit,
                          page_count,
                          total_count,
                          books: bookSearch,
                          authors: authorSearch,
                      })
                    : res.status(404).json({
                          status: 'Not Found',
                          message: 'Book not found',
                      });
            }

            default:
                const { bookSearch, catSearch, total_count, page_count }: any = await searchBooks(searchProps);
                return bookSearch && catSearch
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
        console.log(error.message);
        return res.status(500).json({
            status: 'Internal Server Error',
            message: error.message,
        });
    }
};

export default search;
