import ProductContext from '@/utils/context/ProductContext';
import Title from '../elements/body/cards/Title';
import ProductNavButton from '../elements/body/buttons/ProductNavButton';
import Description from '../elements/body/cards/Description';
import Detail from '../elements/body/cards/Detail';
import { useContext } from 'react';

const BookDetail = ({ book }: any) => {
    const { isActive } = useContext(ProductContext);
    return (
        <>
            <div className="card md:w-2/3 lg:[46%]">
                <div className="card-body bg-white py-10 rounded-xl">
                    <Title title={book?.title} author={book?.author} />
                    <div className="w-full bg-transparent">
                        <ProductNavButton />
                    </div>
                    <div className={`bg-transparent ${isActive === 'Detail' && 'hidden'}`}>
                        <Description description={book?.description} />
                    </div>
                    <div className={`bg-transparent ${isActive === 'Description' && 'hidden'}`}>
                        <Detail book={book} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookDetail;
