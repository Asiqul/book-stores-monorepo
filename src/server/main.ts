import express from 'express';
import ViteExpress from 'vite-express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRouters from './routes/books/route';
import authRouter from './routes/auth/route';
import usersRouter from './routes/users/route';
import shippingRouter from './routes/shipment/route';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.get('/api', (req, res) => {
    res.status(200).send('<h1>Welcome to Books API!</h1>');
});
app.use('/auth/user', authRouter);
app.use('/api/books', bookRouters);
app.use('/api/user', usersRouter);
app.use('/api/shipment', shippingRouter);

ViteExpress.listen(app, 3000, () => console.log('Server is listening on port 3000...'));
