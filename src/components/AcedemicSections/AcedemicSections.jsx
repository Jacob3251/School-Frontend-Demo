import preSchoolImg from "../../assets/images/acedemic_sections/1.png";
import juniorSection from "../../assets/images/acedemic_sections/2.png";
import middleSection from "../../assets/images/acedemic_sections/3.png";
import seniorSection from "../../assets/images/acedemic_sections/4.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const AcedemicSections = () => {
  return (
    //   bg-[#edf6fa]
    <div
      className="w-full py-[50px] sm:py-[100px] bg-[#e3f2fd] animate__animated animate__fadeInUp animate__slow"
      id="academic"
    >
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-headingh1 lg:text-[45px] font-bold font-heading_serif mb-5">
              Acedemic Sections
            </h1>
            <h3 className="text-headingh4">
              Explore Our Comprehensive Academic Program, Catering to the
              Educational Needs of Students.
            </h3>
          </div>
          <div>
            <button className="hidden lg:flex justify-center items-center space-x-1 my-5  text-[14px] text-white duration-200 bg-[#4188e5]  px-5 py-3 rounded-xl font-semibold">
              Apply Now!
            </button>
          </div>
        </div>
        <div className="w-full ">
          {/* Acedemic section grid */}
          <div className="bg-acsBgBorder drop-shadow-md rounded-2xl px-5 py-5 font-robo place-content-center place-items-center  mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="bg-acsCardBgNormal hover:bg-acsCardBgHov duration-300 w-full p-5 rounded-2xl cursor-pointer">
              <div className="h-[61px] w-[61px] my-3">
                <img src={preSchoolImg} alt="" />
              </div>
              <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-headingh1 text-[25px] font-extrabold">
                  Foundation
                </h1>
                <p className="text-[#333333] text-[16px] font-semibold">
                  Pre-school to Grade 5
                </p>
              </div>
              <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-headingh1 hover:text-white duration-200 bg-acsCardBgBtnBasic hover:bg-acsCardBgBtnHover  px-5 py-3 rounded-xl font-semibold">
                <h1>Learn More</h1>{" "}
                <AiOutlineArrowRight className="text-yellow-400" />
              </button>
            </div>
            <div className="bg-acsCardBgNormal hover:bg-acsCardBgHov duration-300 w-full p-5 rounded-2xl cursor-pointer">
              <div className="h-[61px] w-[61px] my-3">
                <img src={juniorSection} alt="" />
              </div>
              <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-headingh1 text-[25px] font-extrabold">
                  Junior
                </h1>
                <p className="text-[#333333] text-[16px] font-semibold">
                  Grade 6 to Grade 8
                </p>
              </div>
              <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-headingh1 hover:text-white duration-200 bg-acsCardBgBtnBasic hover:bg-acsCardBgBtnHover  px-5 py-3 rounded-xl font-semibold">
                <h1>Learn More</h1>{" "}
                <AiOutlineArrowRight className="text-yellow-400" />
              </button>
            </div>
            <div className="bg-acsCardBgNormal hover:bg-acsCardBgHov duration-300 w-full p-5 rounded-2xl cursor-pointer">
              <div className="h-[61px] w-[61px] my-3">
                <img src={middleSection} alt="" />
              </div>
              <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-headingh1 text-[25px] font-extrabold">
                  Secondary
                </h1>
                <p className="text-[#333333] text-[16px] font-semibold">
                  Grade 9 to Grade 10
                </p>
              </div>
              <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-headingh1 hover:text-white duration-200 bg-acsCardBgBtnBasic hover:bg-acsCardBgBtnHover  px-5 py-3 rounded-xl font-semibold">
                <h1>Learn More</h1>{" "}
                <AiOutlineArrowRight className="text-yellow-400" />
              </button>
            </div>
            <div className="bg-acsCardBgNormal hover:bg-acsCardBgHov duration-300 w-full p-5 rounded-2xl cursor-pointer">
              <div className="h-[61px] w-[61px] my-3">
                <img src={seniorSection} alt="" />
              </div>
              <div className="flex flex-col justify-start items-start space-y-3">
                <h1 className="text-headingh1 text-[25px] font-extrabold">
                  Higher Secondary
                </h1>
                <p className="text-[#333333] text-[16px] font-semibold">
                  Grade 11 to 12
                </p>
              </div>
              <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-[#002454] hover:text-white duration-200 bg-acsCardBgBtnBasic hover:bg-[#4188e5]  px-5 py-3 rounded-xl font-semibold">
                <h1>Learn More</h1>{" "}
                <AiOutlineArrowRight className="text-acsCardBgArrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcedemicSections;
