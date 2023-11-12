import Author from './cardElements/Author';
import Price from './cardElements/Price';
import Rating from './cardElements/Rating';
import Title from './cardElements/Title';
import { Link } from 'react-router-dom';
import { CardProps } from '@/types/props.type';

const Card = ({ id, image, alt, author, title, price, rating }: CardProps) => {
    return (
        <>
            <Link to={`/product-detail/` + id} className="card h-[21rem] bg-white shadow-sm mx-2 py-2">
                <div className="max-h-44 min-h-40 2xl:max-h-48 flex justify-center">
                    <div className="w-32 h-44">
                        <img src={image} alt={alt} className="object-contain" width={100} height={100} />
                    </div>
                </div>
                <div className="px-3 bottom-3 absolute w-full">
                    <Author author={author} />
                    <Title title={title} />
                    <Price price={price} />
                    <Rating rating={rating} />
                </div>
            </Link>
        </>
    );
};

export default Card;
