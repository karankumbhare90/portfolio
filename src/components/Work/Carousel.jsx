import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { projectData } from './Data';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

function Carousel() {
    return (
        <Swiper
            modules={[EffectCoverflow, Navigation, Pagination]}
            navigation={{
                prevEl: ".button-prev",
                nextEl: ".button-next",
            }}
            pagination={{
                clickable: true,
            }}
            speed={1000}
            slidesPerView={"auto"}
            centeredSlides
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
        >
            {projectData.map((slide, index) => (
                <SwiperSlide key={index} className="slide-inner">
                    <img src={slide.image} alt="" />
                    <div className="work__details">
                        <h3 className="work__name">{slide?.title}</h3>
                        <a href={slide?.link} className="work__button">
                            GitHub
                        </a>
                    </div>
                </SwiperSlide>
            ))}
            <div className="button-prev">
                <img src={arrowLeft} alt="Left" />
            </div>
            <div className="button-next">
                <img src={arrowRight} alt="Right" />
            </div>
        </Swiper>
    );
}

export default Carousel;
