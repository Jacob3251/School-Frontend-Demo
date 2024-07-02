import { useContext, useEffect } from "react";
import Carousel from "../Shared/Carousel/Carousel";
import img4 from "../../assets/images/Gallerys/4.jpg";
import { FaPlay } from "react-icons/fa";
import { NavigationContext } from "../../contexts/MainContext";
const GallerySection = () => {
  const { showVideo, setShowVideo } = useContext(NavigationContext);
  const handleVideo = () => {
    console.log(showVideo);
    setShowVideo(true);
  };

  return (
    //   bg-[#edf6fa]
    <div
      className="w-full  animate__animated animate__fadeInUp animate__slow"
      id="gallery"
    >
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-[#002454] lg:text-[45px] font-bold font-heading_serif mb-5">
              Gallery
            </h1>
            <h3 className="text-black">Our insightful moments</h3>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="w-full h-[600px] flex flex-col lg:flex-row justify-center items-center lg:space-x-2 bg-white bg-opacity-25">
          {/* <div className="w-full lg:w-[50%] h-full  hidden lg:flex justify-center items-center">
            <div className="relative w-full h-full flex flex-col justify-start items-center ">
              <img
                className="w-full blur-[2px] h-full absolute z-[0]"
                src={img4}
                alt=""
              />
              <div className="z-[10] absolute top-[20%] -translate-y-[20%]  flex justify-center items-center flex-col">
                <h1 className="text-[32px] text-white font-semibold font-robo tracking-wider">
                  Featured Video
                </h1>
              </div>
              <div className="z-[10] w-[80px] h-[80px] bg-red-500  rounded-full absolute top-[50%] -translate-y-[50%]  flex justify-center items-center">
                <button onClick={handleVideo}>
                  <FaPlay className="text-white text-[48px]" />
                </button>
              </div>
            </div>
            {showVideo && (
              <div
                onClick={() => setShowVideo(false)}
                className="fixed w-[100vw] h-[100vh] left-0 flex justify-center items-center bg-black bg-opacity-30 z-[50]"
              >
                <iframe
                  className="w-[70vw] h-[75vh] rounded-md fixed top-[58%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50"
                  src="https://www.youtube.com/embed/Me0euo1YdzY?autoplay=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            )}
          </div> */}
          <div className="w-full lg:w-[100%] h-full bg-white-500 drop-shadow-md rounded-md overflow-hidden">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
