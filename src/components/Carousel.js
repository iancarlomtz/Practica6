import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={1000}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}

        >
            <SwiperSlide><img src="/diapositiva.1.webp" alt="Slide 1" className="slide"
                              style={{ width: "Auto", height: "500px", objectFit: "contain" }} />

            </SwiperSlide>
            <SwiperSlide><img src="/diapositiva2.webp" alt="Slide 2" className="slide"
                              style={{ width: "1150px", height: "500px", objectFit: "contain" }}/>
            </SwiperSlide>
            <SwiperSlide><img src="/diapositiva.3.webp" alt="Slide 3" className="slide"
                              style={{ width: "Auto", height: "500px", objectFit: "contain" }}/>
            </SwiperSlide>


        </Swiper>
    );
};

export default Carousel;
