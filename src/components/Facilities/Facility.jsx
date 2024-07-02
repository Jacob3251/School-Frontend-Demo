import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Facility = ({ facility }) => {
  const { id, image, secondaryImage, title, primaryColor } = facility;
  const [hovered, setHovered] = useState(false);
  const [btnhovered, setBtnHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`w-full h-full overflow-hidden relative`}
    >
      <div
        className={`w-full h-full flex flex-col space-y-3 duration-300 justify-center items-center ${primaryColor} ${
          hovered === true && "hidden"
        }`}
      >
        <img className="h-1/3 w-1/2" src={image} alt="" />
        <h1 className="text-[18px] font-extrabold text-[#002454]">{title}</h1>
      </div>
      <div
        className={`w-full h-full opacity-0 duration-700 ${
          hovered === true && "opacity-100"
        }`}
      >
        <div
          className={`w-full h-full relative duration-300 font-serif ${
            hovered === true
              ? "flex justify-center items-center flex-col"
              : "hidden"
          }`}
        >
          <img
            className="absolute h-full w-full blur-[2px]"
            src={secondaryImage}
            alt=""
          />
          <div className="absolute flex justify-center items-center flex-col space-y-2 top-[50%] -translate-y-[50%] z-10">
            <button
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              className="flex font-robo justify-center items-center space-x-2 px-4 py-3 border-[2px] border-white hover:bg-white rounded-full text-white hover:text-[#002454] duration-300"
            >
              <p>Learn More</p>{" "}
              <AiOutlineArrowRight
                className={`${btnhovered === true && "text-yellow-500"}`}
              />
            </button>
            <h1 className="text-[24px] font-extrabold text-white">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
