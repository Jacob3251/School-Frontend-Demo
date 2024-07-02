import { AiOutlineArrowRight } from "react-icons/ai";

const SecondaryFacility = ({ facility }) => {
  const { id, image, secondaryImage, title, primaryColor } = facility;
  return (
    <div className={`w-full h-[410px] rounded-[25px] bg-black overflow-hidden`}>
      <div
        className={`w-full h-full relative flex justify-center items-center duration-300 font-serif `}
      >
        <img
          className="absolute h-full w-full  opacity-90"
          src={secondaryImage}
          alt=""
        />
        <div className="absolute flex flex-col-reverse justify-center items-center   top-[50%] -translate-y-[50%] z-10 ">
          <button className="mt-[30px] flex font-robo justify-center items-center space-x-2 px-4 py-3 border-[2px] border-white hover:bg-white rounded-full text-white hover:text-[#002454] duration-300">
            <p>Learn More</p>{" "}
            <AiOutlineArrowRight className={`text-yellow-500 text-[24px]`} />
          </button>
          <h1 className="text-[35px] font-extrabold text-white">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default SecondaryFacility;
