import Author from '../sliders/cardElements/Author';
import Title from '../sliders/cardElements/Title';
import Price from '../sliders/cardElements/Price';
import Rating from '../sliders/cardElements/Rating';
import { CardProps } from '@/types/props.type';

const BookCard = ({ id, image, alt, author, title, price, rating }: CardProps) => {
    return (
        <>
            <a
                href={`/product-detail/` + id}
                className="py-2 px-2 flex flex-col justify-center items-center bg-white rounded-xl h-[22rem] shadow-md"
            >
                <div className="py-4 rounded-xl">
                    <img src={image} alt={alt} className="object-contain h-44" />
                </div>
                <div className="px-3 bottom-3 w-full">
                    <Author author={author} />
                    <Title title={title} />
                    <Price price={price} />
                    <Rating rating={rating} />
                </div>
            </a>
        </>
    );
};

export default BookCard;
