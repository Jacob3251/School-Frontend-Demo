import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import testImage1 from "../../assets/images/Testimonials/1.png";
import testImage2 from "../../assets/images/Testimonials/2.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  return (
    <div
      className="w-full py-[50px] font-robo animate__animated animate__fadeInUp animate__slow"
      id="about-us"
    >
      <div className=" flex flex-col justify-start items-center w-[90%] mx-auto max-w-[1400px] ">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-[#002454] lg:text-[45px] font-bold font-heading_serif mb-5">
              What Parents Says About Us
            </h1>
            <h3 className="text-black">Why we are the best</h3>
          </div>
          {/* <div>
            <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-white duration-200 bg-[#4188e5]  px-5 py-3 rounded-xl font-semibold">
              Apply Now!
            </button>
          </div> */}
        </div>
        {/* <div className="h-auto md:h-[300px] bg-blue-100 w-full md:w-[600px] lg:w-[800px]">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={true}
            showStatus={false}
            showIndicators={false}
          >
            <div className="w-full  flex flex-col-reverse py-5 md:py-0 md:flex-row  justify-center items-center h-auto md:h-[300px] bg-white rounded-lg text-black">
              <div className="w-[100%] px-5 py-5 flex flex-col justify-center items-center">
                <div className=" font-robo font-semibold text-[18px]">
                  Parent Name
                </div>
                <div className="mt-[20px] font-robo text-[14px] font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, laboriosam repudiandae dolorum aliquid maxime, commodi
                  sequi omnis magnam ex facilis officiis ad beatae ut.
                  Explicabo, provident fugit, praesentium ipsum quod odit
                  recusandae fuga, at eaque quis error accusamus repellat. Esse
                  aspernatur autem alias? Porro repellendus inventore, harum
                  beatae minus sequi?
                </div>
              </div>
              <div className="w-[100%] px-10  flex justify-center items-center">
                <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] p-2 rounded-full bg-gray-300">
                  <div className="h-[100%] w-[100%] rounded-full bg-white">
                    <img
                      className="w-[100%] h-[100%] rounded-full"
                      src={testImage1}
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col-reverse py-5 md:py-0 md:flex-row  justify-center items-center h-auto md:h-[300px] bg-white rounded-lg text-black">
              <div className="w-[100%] px-5 py-5 flex flex-col justify-center items-center">
                <div className=" font-robo font-semibold text-[18px]">
                  Parent Name
                </div>
                <div className="mt-[20px] font-robo text-[14px] font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, laboriosam repudiandae dolorum aliquid maxime, commodi
                  sequi omnis magnam ex facilis officiis ad beatae ut.
                  Explicabo, provident fugit, praesentium ipsum quod odit
                  recusandae fuga, at eaque quis error accusamus repellat. Esse
                  aspernatur autem alias? Porro repellendus inventore, harum
                  beatae minus sequi?
                </div>
              </div>
              <div className="w-[100%] px-10  flex justify-center items-center">
                <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] p-2 rounded-full bg-gray-300">
                  <div className="h-[100%] w-[100%] rounded-full bg-white">
                    <img
                      className="w-[100%] h-[100%] rounded-full"
                      src={testImage1}
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div> */}
        <div className="h-[400px] w-full">
          <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
