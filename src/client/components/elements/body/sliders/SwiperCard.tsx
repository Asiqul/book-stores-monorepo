import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css/bundle';
import '@/styles/swiperCard.css';
import Card from './Card';
import { CSSProperties } from 'react';

const SwiperCard = ({ list }: { list: any }) => {
    return (
        <div className="lg:mt-1 h-[370px] py-3 px-2 sm:px-4 md:px-6 bg-transparent bg-opacity-50 rounded-xl -z-10 w-full">
            <Swiper
                style={
                    {
                        '--swiper-navigation-color': '#439A97',
                        '--swiper-navigation-size': '25px',
                    } as CSSProperties
                }
                id="swiper"
                modules={[Navigation]}
                navigation
                breakpoints={{
                    200: {
                        slidesPerView: 1.5,
                    },
                    300: {
                        slidesPerView: 2,
                    },
                    480: {
                        slidesPerView: 2.5,
                    },
                    550: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 4.5,
                    },
                    1280: {
                        slidesPerView: 5.5,
                    },
                    1536: {
                        slidesPerView: 6.5,
                    },
                }}
                className="w-full h-full cursor-grab active:cursor-grabbing"
            >
                {list?.length > 0 &&
                    list.map((book: any) => {
                        const image = book.cover[0].cover;
                        const author = book.author[0].name;

                        return (
                            <SwiperSlide className="swiper-slide" key={book.id}>
                                <Card
                                    id={book.id}
                                    image={image}
                                    alt={book.title}
                                    author={author}
                                    price={book.price}
                                    title={book.title}
                                    rating={book.rating}
                                />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
};

export default SwiperCard;
