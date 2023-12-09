import express from 'express';
import bookById from '../../controllers/books/get-by-id';
import search from '../../services/books/search';
import recommendBooks from '../../services/books/recommendations';
import populars from '../../services/books/populars';
import bestSale from '../../services/books/best-sale';
import intBooks from '../../services/books/inter-books';
import category from '../../controllers/books/category';
const bookRouters = express.Router();

bookRouters.get('/recommendations?', recommendBooks);
bookRouters.get('/populars?', populars);
bookRouters.get('/best-seller?', bestSale);
bookRouters.get('/international?', intBooks);
bookRouters.get('/category', category);
bookRouters.get('/search?', search);
bookRouters.get('/:bookId', bookById);

export default bookRouters;
