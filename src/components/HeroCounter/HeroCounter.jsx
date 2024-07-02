import { FaUserGraduate } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaGears } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
const HeroCounter = () => {
  return (
    <div className="w-full pb-5 sm:pb-20 animate__animated animate__fadeInUp animate__slow">
      <div className="w-[85%] mx-auto max-w-[1400px]">
        <div className="font-robo flex flex-col lg:flex-row  items-center space-x-5 text-[36px] xl:text-[48px]  mb-[50px] xl:mb-5  text-hotlineCol">
          <h1 className="">Hotline Number:</h1>
          <div className="hover:text-red-500 duration-500">
            <a href="tel:0170000000">01316-575006</a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-[15px] gap-y-[15px] place-content-center place-items-center w-full h-full">
          <div className="bg-counterBg p-8 rounded-xl h-full w-full flex justify-center items-center flex-col">
            <div className="w-full text-[48px] text-counterText flex justify-center items-center space-x-2">
              <FaUsers />
              <div>
                <CountUp duration={3} start={0} end={50} useEasing={true} />+
              </div>
            </div>
            <div className="text-[32px] uppercase">Teachers</div>
          </div>
          <div className="bg-counterBg p-8 rounded-xl h-full w-full flex justify-center items-center flex-col">
            <div className="w-full text-[48px] text-counterText flex justify-center items-center space-x-2">
              <FaBook />
              <div>
                <CountUp duration={3} start={0} end={12} useEasing={true} />
              </div>
            </div>
            <div className="text-[32px] uppercase">Grades</div>
          </div>
          <div className="bg-counterBg p-8 rounded-xl h-full w-full flex justify-center items-center flex-col">
            <div className="w-full text-[48px] text-counterText flex justify-center items-center space-x-2">
              <FaGears />
              <div>
                <CountUp duration={3} start={0} end={100} useEasing={true} /> %
              </div>
            </div>
            <div className="text-[32px] uppercase">Attention</div>
          </div>
          <div className="bg-counterBg p-8 rounded-xl h-full w-full flex justify-center items-center flex-col">
            <div className="w-full text-[48px] text-counterText flex justify-center items-center space-x-2">
              <FaUserGraduate />
              <div>
                <CountUp duration={3} start={0} end={5000} useEasing={true} />+
              </div>
            </div>
            <div className="text-[32px] uppercase">Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCounter;
