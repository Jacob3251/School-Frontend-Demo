import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./testimonial_styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import testImage1 from "../../assets/images/Testimonials/1.png";
import { useEffect, useState } from "react";
const Testimonial = () => {
  const [stateValue, setStateValue] = useState(1);
  const testImage1 =
    "https://images.unsplash.com/photo-1482235225574-c37692835cf3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setStateValue(1);
      } else if (screenWidth < 1024) {
        setStateValue(2);
      } else {
        setStateValue(3);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize(); // Run once on initial render

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []); // Empty dependency array to run useEffect only once

  return (
    <Swiper
      slidesPerView={stateValue}
      spaceBetween={10}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p className="">
              Our children flourish at this school, thanks to the dedicated
              teachers and their expertise. The facilities are top-notch,
              providing an enriching learning environment.
            </p>
            <h1>Mujakkir Ahmed</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              We are thrilled with the school's commitment to excellence. The
              teachers' expertise and the exceptional facilities ensure our
              child receives the best education possible.
            </p>
            <h1>Abu Nowshad Jawad</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              Impressed by the school's dedication to nurturing young minds. The
              teachers' expertise and the modern facilities create an ideal
              learning atmosphere for our child's growth.
            </p>
            <h1>Al Amin Tutul</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              Impressed by the school's dedication to nurturing young minds. The
              teachers' expertise and the modern facilities create an ideal
              learning atmosphere for our child's growth.
            </p>
            <h1>Mujakkir Ahmed</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              The school's outstanding facilities and the teachers' expertise
              make it a standout choice. Our child thrives in such a supportive
              and enriching educational environment.
            </p>
            <h1>Falak Mia</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial drop-shadow-md">
          <div className="testimonial-header drop-shadow-md">
            <div className="testimonial-image overflow-hidden">
              <img className="w-full h-full" src={testImage1} alt="" />
            </div>
          </div>
          <div className="testimonial-content">
            <p>
              Highly impressed by the school's focus on academic excellence. The
              teachers' expertise and the well-equipped facilities ensure our
              child receives a quality education tailored to their needs.
            </p>
            <h1>Moyna Mia</h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Testimonial;
