import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from "../../assets/images/NewsEvents/1.jpg";
import img2 from "../../assets/images/NewsEvents/2.jpg";
import img3 from "../../assets/images/NewsEvents/3.jpg";
const NewsEvents = () => {
  return (
    <div
      className="w-full py-[50px] sm:py-20 animate__animated animate__fadeInUp animate__slow"
      id="event"
    >
      <div className=" flex flex-col justify-start items-center w-[85%] mx-auto max-w-[1400px]">
        <div className="w-full flex justify-between items-center mb-8 font-robo">
          <div>
            <h1 className=" text-[35px] text-[#002454] lg:text-[45px] font-bold font-heading_serif mb-5">
              News & Events
            </h1>
            <h3 className="text-black">
              Stay Up-to-Date with the Latest Happenings at Our School - From
              Exciting Events to Breaking News
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center gap-5 w-full">
          <div className="card card-compact bg-cardbgColor shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500 h-full w-full"
                src={img1}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-coloredh4 font-robo">Sep 02, 2023</h3>
              <h2 className="card-title font-bold text-[24px] text-black">
                Tree Festival 2023
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Immerse in nature's beauty at Tree Festival 2023, fostering
                environmental awareness and joy. Join us for a day of green
                celebrations and unity.
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-coloredh4" />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-cardbgColor shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500 h-full w-full"
                src={img2}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-coloredh4 font-robo">Dec 01, 2023</h3>
              <h2 className="card-title font-bold text-[24px] text-black">
                Graduation Day, Session 2023
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Celebrate achievements and bid farewell at Graduation Day,
                Session 2023. Embrace memories, honor dedication, and welcome
                new beginnings with pride.
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-coloredh4" />
                </button>
              </div>
            </div>
          </div>
          <div className="card card-compact  bg-cardbgColor shadow-xl">
            <figure className="h-[300px] max-h-[320px] overflow-hidden">
              <img
                className="hover:scale-105 duration-500 h-full w-full"
                src={img3}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-coloredh4 font-robo">Aug 01, 2022</h3>
              <h2 className="card-title font-bold text-[24px] text-black">
                Annual tour 2022
              </h2>
              <p className="text-[14px] text-gray-600 font-robo">
                Embark on an unforgettable journey with Annual Tour 2022.
                Explore, learn, and create memories beyond the classroom,
                enriching minds and hearts.
              </p>
              <div className="card-actions my-5 justify-start">
                <button className="flex justify-center items-center space-x-2 px-4 py-3 font-semibold rounded-lg text-[#002454] duration-300 hover:text-white font-robo text-[16px] bg-white hover:bg-[#4188e5] drop-shadow-lg">
                  <h1>Learn More</h1>{" "}
                  <AiOutlineArrowRight className="text-coloredh4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEvents;
