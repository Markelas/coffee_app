'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Navigation, Pagination} from 'swiper/modules';

export default function TheSwiper(props) {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={-95}
                centeredSlides={false}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {props.data && props.data.map((item) =>
                    <SwiperSlide key={item.id}>
                        <div className="swiper__card">
                            <img src={item.imgUrl} alt=""/>
                            <h4>{item.title}</h4>
                            <p className="swiper__card__desr">{item.desr}</p>
                            <p className="swiper__card__price">{item.price}</p>
                            <p className="swiper__card__value">{item.volume}</p>
                            <button className="swiper__card__btn">Buy Product</button>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
