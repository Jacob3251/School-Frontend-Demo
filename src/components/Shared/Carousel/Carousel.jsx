import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../../../assets/images/Gallerys/1.jpg";
import img2 from "../../../assets/images/Gallerys/2.jpg";
import img3 from "../../../assets/images/Gallerys/3.jpg";
import img4 from "../../../assets/images/Gallerys/4.jpg";
import img5 from "../../../assets/images/Gallerys/5.jpg";
import img6 from "../../../assets/images/Gallerys/6.jpg";
import img7 from "../../../assets/images/Gallerys/7.jpg";
import img8 from "../../../assets/images/Gallerys/8.jpg";
import img9 from "../../../assets/images/Gallerys/9.jpg";
import img10 from "../../../assets/images/Gallerys/10.jpg";
import img11 from "../../../assets/images/Gallerys/11.jpg";
const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img11} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
