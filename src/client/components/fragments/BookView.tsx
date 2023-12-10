import { BookViewProps } from '@/types/props.type';
import BannerCategory from '../elements/body/sliders/BannerCategory';
import Subtitle from '../elements/body/sliders/Subtitle';
import SwiperCardCategory from '../elements/body/sliders/SwiperCardCategory';

const BookView = ({ books, title, banner, keyword }: BookViewProps) => {
    return (
        <>
            <div className="mt-8 lg:mt-12 container mx-auto">
                <Subtitle title={title} expand={true} keyword={keyword} />
                <div>
                    <SwiperCardCategory listBooks={books}>
                        <BannerCategory image={banner} alt="Populars" />
                    </SwiperCardCategory>
                </div>
            </div>
        </>
    );
};

export default BookView;
