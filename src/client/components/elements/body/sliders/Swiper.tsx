import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Content from './Content';

const Banner = [
    {
        id: 1,
        src: '/banners/Promo_Spesial_HUT_Grasindo.png',
        alt: '',
    },
    {
        id: 2,
        src: '/banners/PO_Solo_Leveling_IV.jpg',
        alt: '',
    },
    {
        id: 3,
        src: '/banners/PO_Majalah_Bobo_Edisi_Koleksi.jpg',
        alt: '',
    },
    {
        id: 4,
        src: '/banners/Gramedia_Back_to_Campus_2023.jpg',
        alt: '',
    },
    {
        id: 5,
        src: '/banners/Diskon_Kejutan_Gramedia.jpg',
        alt: '',
    },
];

const SwiperBanner = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
            }}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 9900,
                disableOnInteraction: false,
            }}
            className="w-full h-full cursor-pointer active:cursor-grabbing"
        >
            {Banner.map((banner) => (
                <SwiperSlide key={banner.id}>
                    <Content src={banner.src} alt={banner.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperBanner;
