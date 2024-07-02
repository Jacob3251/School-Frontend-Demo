import dc from "../../assets/images/Facilites/colored design/dc.png";
import dc1 from "../../assets/images/Facilites/colored design/dc1.png";
import c from "../../assets/images/Facilites/colored design/c.png";
import c1 from "../../assets/images/Facilites/colored design/c1.png";
import l from "../../assets/images/Facilites/colored design/l.png";
import l1 from "../../assets/images/Facilites/colored design/l1.jpg";
import lib from "../../assets/images/Facilites/colored design/lib.png";
import lib1 from "../../assets/images/Facilites/colored design/lib1.png";
import mk from "../../assets/images/Facilites/colored design/mk.png";
import mk1 from "../../assets/images/Facilites/colored design/mk1.jpg";
import st from "../../assets/images/Facilites/colored design/st.png";
import st1 from "../../assets/images/Facilites/colored design/st1.jpg";
import leftBgImg from "../../assets/images/Facilites/backgrounds/1.jpg";
import Facility from "./Facility";
import SecondaryFacility from "./SecondaryFacility";
const Facilities = () => {
  const facilityData = [
    {
      id: 1,
      image: c,
      secondaryImage: c1,
      title: "Clubs",
      primaryColor: "bg-white",
    },
    {
      id: 2,
      image: dc,
      secondaryImage: dc1,
      title: "Day Care",
      primaryColor: "bg-[#aee6ff]",
    },
    {
      id: 3,
      image: l,
      secondaryImage: l1,
      title: "STEM Labs",
      primaryColor: "bg-white",
    },
    {
      id: 4,
      image: lib,
      secondaryImage: lib1,
      title: "Librarys",
      primaryColor: "bg-[#aee6ff]",
    },
    {
      id: 5,
      image: mk,
      secondaryImage: mk1,
      title: "My e-kids",
      primaryColor: "bg-white",
    },
    {
      id: 6,
      image: st,
      secondaryImage: st1,
      title: "Safe Transport",
      primaryColor: "bg-[#aee6ff]",
    },
  ];
  return (
    //   bg-[#edf6fa]
    <div
      className="w-full py-[50px] sm:py-[100px] font-robo animate__animated animate__fadeInUp animate__slow"
      id="facilities"
    >
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-[#002454] lg:text-[45px] font-bold font-heading_serif mb-5">
              Our Facilities
            </h1>
            <h3 className="text-black">Why we are the best</h3>
          </div>
          <div className="hidden lg:flex">
            <button className="flex justify-center items-center space-x-1 my-5  text-[14px] text-white duration-200 bg-[#4188e5]  px-5 py-3 rounded-xl font-semibold">
              Apply Now!
            </button>
          </div>
        </div>
        <div className="w-full my-5   h-auto sm:h-[600px] flex flex-col lg:flex-row justify-between items-center">
          <div className="w-[45%] p-16  bg-[#f6fbfd] h-full hidden xl:block rounded-full overflow-hidden drop-shadow-md">
            <div className="h-full w-full rounded-full overflow-hidden">
              <img className="w-full h-full bg-cover" src={leftBgImg} alt="" />
            </div>
          </div>
          <div className="w-full xl:w-[50%] h-full drop-shadow-xl md:drop-shadow-lg">
            <div className=" xl:w-[85%] h-full mx-auto rounded-t-xl rounded-b-xl hidden sm:grid grid-cols-3 overflow-hidden">
              {facilityData.map((facility) => (
                <Facility key={facility.id} facility={facility}></Facility>
              ))}
            </div>
            <div className="w-full h-auto grid grid-cols-1 gap-y-5 px-2  sm:hidden">
              {facilityData.map((facility) => (
                <SecondaryFacility
                  key={facility.id}
                  facility={facility}
                ></SecondaryFacility>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// bg-[#edf6fa]
export default Facilities;
