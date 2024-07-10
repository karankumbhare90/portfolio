import React from 'react';
import { projectData } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react'
// Slider CSS
import "swiper/css";
import "swiper/css/pagination";
// Import Pagination module
import { Pagination } from 'swiper/modules'

import './Work.css'

const Works = () => {

    return (
        <Swiper className="work__container"
            loop={true}
            grabCursor={true}
            spaceBetween={40}
            pagination={{
                clickable: true
            }}
            breakpoints={{
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
            }}
            modules={[Pagination]}
        >
            {projectData.map((item) => (
                <SwiperSlide className='work__card' key={item?.id}>
                    <img src={item?.image} alt="Project Profile" className='work__img ' />
                    <div className="work__details">
                        <h3 className="work__name">{item?.title}</h3>
                        <a href={item?.link} className="work__button">
                            GitHub
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Works;
