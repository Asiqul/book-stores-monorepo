import Subtitle from '../elements/body/sliders/Subtitle';
import SwiperCard from '../elements/body/sliders/SwiperCard';

interface MinBookViewProps {
    books: any;
    title: string;
    background?: string;
    keyword: string;
}

const MinBookView = ({ books, title, background, keyword }: MinBookViewProps) => {
    return (
        <>
            <div className={`${background} mt-6 lg:mt-12 container mx-auto py-5`}>
                <Subtitle title={title} expand={true} keyword={keyword} />
                <div>
                    <SwiperCard list={books} />
                </div>
            </div>
        </>
    );
};

export default MinBookView;
