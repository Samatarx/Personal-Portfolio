import { FiFigma } from "react-icons/fi";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import carouselData from "./carouselData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {  Navigation } from "swiper/core";
SwiperCore.use([ Navigation]);
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
        spaceBetween={10}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {carouselData.map((caro) => {
          const { id, title, desc, figma, site, github } = caro;
          return <SwiperSlide>{title}</SwiperSlide>;
        })}
      </Swiper>
    </summary>
  );
};

export default CarouselComp;
