import { FiFigma } from "react-icons/fi";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import carouselData from "./carouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);
const CarouselComp = ({ colour }) => {
  //   const {id, title,desc,figma,site,github} = carouselData
  return (
    <summary className={`${colour}-bg carousel `}>
      <h2 className="sub-heading" id="carousel-title">
        Other Projects
      </h2>

      <Swiper
        slidesPerView={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        spaceBetween={30}
        breakpoints={{
          1: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView:4 ,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },1500: {
            slidesPerView: 7,
            spaceBetween: 50,
          }
        }}
        className="mySwiper"
      >
        {carouselData.map((caro) => {
          const { id, title, desc, figma, site, github } = caro;
          return (
            <SwiperSlide key={id}>
              <div className="caro-card">
                <span>{title}</span>
                <div className="caro-content">
                  <p className="caro-desc"> {desc}</p>
                  <div className="caro-content-links">
                    {figma && (
                      <a href={figma} target="_blank" rel="noreferrer">
                        <FiFigma className={`${colour}`} />
                      </a>
                    )}
                    {github && (
                      <a href={github} target="_blank" rel="noreferrer">
                        <AiFillGithub className={`${colour}`} />
                      </a>
                    )}
                    {site && (
                      <a href={site} target="_blank" rel="noreferrer">
                        <AiOutlineLink className={`${colour}`} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </summary>
  );
};

export default CarouselComp;
