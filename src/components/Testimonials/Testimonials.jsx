import React from 'react'
import './Testimonials.css'
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react'

// Slider CSS
import "swiper/css";
import "swiper/css/pagination";

// Import Pagination module
import { Pagination } from 'swiper/modules'

const Testimonials = () => {
    return (
        <section className="section testimonial container" id="testimonial">
            <h2 className="section__title">My Client Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination]}
            >
                {Data.map((item) => (
                    <SwiperSlide className='testimonial__card' key={item?.id}>
                        <img src={item?.image} alt="Person Avatar" className='testimonial__img' />
                        <h3 className="testimonial__name">{item?.title}</h3>
                        <p className="testimonial__description">{item?.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials
