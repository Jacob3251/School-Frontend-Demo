import { Link } from "react-router-dom";

const SiteNotification = () => {
  return (
    <div className="bg-[#77DD77] fixed top-0 h-[80px] w-full font-robo text-[#332501] text-[16px] py-5 flex flex-col md:flex-row justify-center items-center space-x-2 ">
      <h1 className="text-center px-3 md:px-0">
        Admission is going on for the Session: 2023-2024 from PG to A level.
      </h1>
      <Link className="hidden md:block font-semibold italic underline hover:no-underline duration-200 hover:text-red-500">
        Contact Us
      </Link>
    </div>
  );
};

export default SiteNotification;
