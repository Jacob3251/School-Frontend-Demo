import img1 from "../../assets/images/branches/1.png";
import img2 from "../../assets/images/branches/2.png";
import img3 from "../../assets/images/branches/3.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Branches = () => {
  return (
    //   bg-[#edf6fa]
    <div
      className="w-full py-[150px] animate__animated animate__fadeInUp animate__slow"
      id="branches"
    >
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-[#002454] lg:text-[45px] font-bold font-heading_serif mb-5">
              Our Branches
            </h1>
            <h3 className="text-black">Where we operate</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-5 w-full">
          <div className="card card-compact bg-white shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[24px] text-black">
                Location, sublocation
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur libero illum expedita consequuntur distinctio modi ab
                aliquid nam officiis ea?
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-yellow-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-white shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500"
                src={img2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[24px] text-black">
                Location, sublocation
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur libero illum expedita consequuntur distinctio modi ab
                aliquid nam officiis ea?
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-yellow-500" />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-white shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500"
                src={img3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-[24px] text-black">
                Location, sublocation
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur libero illum expedita consequuntur distinctio modi ab
                aliquid nam officiis ea?
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-yellow-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
