import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carouselImg1 from "../../assets/images/Hero_Section/1.webP";
import carouselImg2 from "../../assets/images/Hero_Section/2.webP";
import carouselImg3 from "../../assets/images/Hero_Section/3.webP";
const HeroCarousel = () => {
  return (
    <div
      className="w-full pt-[150px] sm:py-[100px] font-robo  !z-[-999]"
      id="home"
    >
      <div className=" flex flex-col justify-start items-center w-[90%] mx-auto max-w-[1400px] ">
        <div className="xl:h-[700px] py-[50px]  w-full overflow-hidden flex justify-center items-center">
          <Carousel
            autoPlay
            infiniteLoop
            interval={3000}
            showThumbs={false}
            showStatus={false}
          >
            <div className="w-[85%] mx-auto flex flex-col-reverse xl:flex-row justify-between items-center space-x-5   py-10 xl:py-0">
              <div className="flex  flex-col w-full xl:w-auto py-0 xl:py-0  justify-start items-center xl:items-start">
                <h3 className="text-coloredh4 text-[17px] text-center xl:text-left">
                  We Nurture the Future Leaders
                </h3>
                <h1 className="text-heroHeading text-[24px]  md:text-[50px] lg:text-[70px] text-center xl:text-left font-bold my-5">
                  We Nurture the Future Leaders
                </h1>
                <button className="bg-heroBtnBg mt-[20xp] xl:mt-[50px] hover:bg-heroHoverBtnBg duration-300 tracking-wide text-white text-[16px] px-4 py-3 rounded-full drop-shadow-lg">
                  Campus Care
                </button>
              </div>
              <div className="w-[50%]  h-[50%] z-0">
                <img src={carouselImg1} alt="" />
              </div>
            </div>
            <div className="w-[85%] mx-auto  flex flex-col-reverse xl:flex-row justify-between items-center space-x-5   py-10 xl:py-0">
              <div className="flex flex-col w-full xl:w-auto py-0 xl:py-0  justify-start items-center xl:items-start">
                <h3 className="text-coloredh4 text-[17px] text-center xl:text-left">
                  We Nurture the Future Leaders
                </h3>
                <h1 className="text-heroHeading text-[24px]  md:text-[50px] lg:text-[70px] text-center xl:text-left font-bold my-5">
                  Child is yours, Endeavour is our
                </h1>
                <button className="bg-heroBtnBg mt-[20xp] xl:mt-[50px] hover:bg-heroHoverBtnBg duration-300 tracking-wide text-white text-[16px] px-4 py-3 rounded-full drop-shadow-lg">
                  Campus Care
                </button>
              </div>
              <div className="w-[50%] h-[50%] z-0">
                <img src={carouselImg2} alt="" />
              </div>
            </div>
            <div className="w-[85%] mx-auto  flex flex-col-reverse xl:flex-row justify-between items-center space-x-5   py-10 xl:py-0">
              <div className="flex flex-col w-full xl:w-auto py-0 xl:py-0  justify-start items-center xl:items-start">
                <h3 className="text-coloredh4 text-[17px] text-center xl:text-left">
                  Lets build up together
                </h3>
                <h1 className="text-heroHeading text-[24px]  md:text-[50px] lg:text-[70px] text-center xl:text-left font-bold my-5">
                  Better Future for your Kids
                </h1>
                <button className="bg-heroBtnBg mt-[20xp] xl:mt-[50px] hover:bg-heroHoverBtnBg duration-300 tracking-wide text-white text-[16px] px-4 py-3 rounded-full drop-shadow-lg">
                  Campus Care
                </button>
              </div>
              <div className="w-[50%] h-[50%] z-0">
                <img src={carouselImg3} alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
