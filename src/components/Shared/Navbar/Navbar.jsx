import { useEffect, useState } from "react";
import WebNavMenu from "./WebNavMenu";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/logos/logo.png";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const navbarDetails = [
    // {
    //   key: 1,
    //   title: "Admission",
    //   hashLink: "admission",
    //   subMenu: [
    //     {
    //       title: "Admission Notice",
    //       link: "link",
    //     },
    //     {
    //       title: "Admission Brochure",
    //       link: "link",
    //     },
    //   ],
    // },
    {
      key: 3,
      title: "Academic",
      hashLink: "academic",
      subMenu: [
        {
          title: "Noticeboard",
          link: "link",
        },
        {
          title: "Students Oath",
          link: "link",
        },
        {
          title: "Acedemic Calender",
          link: "link",
        },
        {
          title: "Facilites",
          link: "link",
        },
        {
          title: "Health Care",
          link: "link",
        },
        {
          title: "Dress Code",
          link: "link",
        },
        {
          title: "Exam Rule",
          link: "link",
        },
        {
          title: "Handbook",
          link: "link",
        },
      ],
    },
    {
      key: 2,
      title: "Facilities",
      hashLink: "facilities",
      subMenu: [
        {
          title: "Branch 1",
          link: "link",
        },
        {
          title: "Branch 2",
          link: "link",
        },
      ],
    },

    {
      key: 4,
      title: "Events",
      hashLink: "event",
      subMenu: [
        {
          title: "E-Learning",
          link: "link",
        },
        {
          title: "Library",
          link: "link",
        },
        {
          title: "Laboratory",
          link: "link",
        },
        {
          title: "Stem Lab",
          link: "link",
        },
        {
          title: "My E-Kids",
          link: "link",
        },
        {
          title: "Cafetaria",
          link: "link",
        },
        {
          title: "Health Care",
          link: "link",
        },
      ],
    },
    {
      key: 5,
      title: "Gallery",
      hashLink: "gallery",
      subMenu: [
        {
          title: "Mission & Vision",
          link: "link",
        },
        {
          title: "Aims & Objects",
          link: "link",
        },
        {
          title: "Special Features",
          link: "link",
        },
        {
          title: "Administration",
          link: "link",
        },
        {
          title: "Teachers",
          link: "link",
        },
      ],
    },
    {
      key: 6,
      title: "About Us",
      hashLink: "about-us",
      subMenu: [
        {
          title: "Mission & Vision",
          link: "link",
        },
        {
          title: "Aims & Objects",
          link: "link",
        },
        {
          title: "Special Features",
          link: "link",
        },
        {
          title: "Administration",
          link: "link",
        },
        {
          title: "Teachers",
          link: "link",
        },
      ],
    },
  ];
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isBranchesOpen, setIsBranchesOpen] = useState(false);
  const [isAcedemicOpen, setIsAcedemicOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleClose = () => {
    console.log("clicked");
    setIsNavbarOpen(!isNavbarOpen); // Assuming you have a state variable to control the navbar's visibility
    setIsAdmissionOpen(false);
    setIsBranchesOpen(false);
    setIsAcedemicOpen(false);
    setIsFacilitiesOpen(false);
    setIsAboutUsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      //   console.log(window.scrollY);
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full drop-shadow-md z-[1000] bg-navbarColor ${
        !isSticky ? "fixed top-[80px]" : "fixed top-0"
      }`}
    >
      <div className=" flex flex-col justify-start items-center w-full xl:w-[85%] mx-auto max-w-[1400px]">
        <div className="navbar px-8 sm:px-14 xl:px-0 ">
          <div className="w-full flex justify-between items-center lg:navbar-start">
            <div className="w-full h-full flex items-center">
              <HashLink
                smooth
                to="/#home"
                className="h-[80px] w-[80px] text-xl"
              >
                <img className="h-full w-full" src={logo} alt="" />
              </HashLink>
              <h3 className="text-black font-semibold text-left">
                Cambridge Grammar <br />
                School & College
              </h3>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                onClick={handleClose}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <FaBars className="text-[24px]" />
              </div>
              {isNavbarOpen && (
                <ul
                  tabIndex={0}
                  onBlur={handleClose}
                  className="menu menu-md dropdown-content mt-3 z-[5] p-2 text-[18px]  bg-white rounded-box w-[60vw]"
                >
                  <li>
                    <HashLink
                      smooth
                      to="/#academic"
                      // onClick={() => {
                      //   setIsAdmissionOpen(true);
                      //   setIsBranchesOpen(false);
                      //   setIsAcedemicOpen(false);
                      //   setIsFacilitiesOpen(false);
                      //   setIsAboutUsOpen(false);
                      // }}
                    >
                      Academic
                    </HashLink>
                    {/* {isAdmissionOpen && (
                      <ul className="p-2">
                        <li>
                          <a>Admission Notice</a>
                        </li>
                        <li>
                          <a>Admission Brochure</a>
                        </li>
                      </ul>
                    )} */}
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#facilities"
                      // onClick={() => {
                      //   setIsAdmissionOpen(false);
                      //   setIsBranchesOpen(true);
                      //   setIsAcedemicOpen(false);
                      //   setIsFacilitiesOpen(false);
                      //   setIsAboutUsOpen(false);
                      // }}
                    >
                      Facilities
                    </HashLink>
                    {/* {isBranchesOpen && (
                      <ul className="p-2">
                        <li>
                          <a>Branch 1</a>
                        </li>
                        <li>
                          <a>Branch 2</a>
                        </li>
                      </ul>
                    )} */}
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#event"
                      // onClick={() => {
                      //   setIsAdmissionOpen(false);
                      //   setIsBranchesOpen(false);
                      //   setIsAcedemicOpen(true);
                      //   setIsFacilitiesOpen(false);
                      //   setIsAboutUsOpen(false);
                      // }}
                    >
                      Event
                    </HashLink>
                    {/* {isAcedemicOpen && (
                      <ul className="p-2">
                        <li>
                          <a>Noticeboard</a>
                        </li>
                        <li>
                          <a>Students Oath</a>
                        </li>
                        <li>
                          <a>Acedemic Calender</a>
                        </li>
                        <li>
                          <a>Facilites</a>
                        </li>
                        <li>
                          <a>Health Care</a>
                        </li>
                        <li>
                          <a>Dress Code</a>
                        </li>
                        <li>
                          <a>Exam Rule</a>
                        </li>
                        <li>
                          <a>Dress Code</a>
                        </li>
                        <li>
                          <a>Handbook</a>
                        </li>
                      </ul>
                    )} */}
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#gallery"

                      // onClick={() => {
                      //   setIsAdmissionOpen(false);
                      //   setIsBranchesOpen(false);
                      //   setIsAcedemicOpen(false);
                      //   setIsFacilitiesOpen(true);
                      //   setIsAboutUsOpen(false);
                      // }}
                    >
                      Gallery
                    </HashLink>
                    {/* {isFacilitiesOpen && (
                      <ul className="p-2">
                        <li>
                          <a>E-Learning</a>
                        </li>
                        <li>
                          <a>Library</a>
                        </li>
                        <li>
                          <a>Laboratory</a>
                        </li>
                        <li>
                          <a>Stem Lab</a>
                        </li>
                        <li>
                          <a>My E-Kids</a>
                        </li>
                        <li>
                          <a>Cafetaria</a>
                        </li>
                        <li>
                          <a>Health Care</a>
                        </li>
                      </ul>
                    )} */}
                  </li>
                  <li>
                    <HashLink
                      smooth
                      to="/#about-us"
                      // onClick={() => {
                      //   setIsAdmissionOpen(false);
                      //   setIsBranchesOpen(false);
                      //   setIsAcedemicOpen(false);
                      //   setIsFacilitiesOpen(false);
                      //   setIsAboutUsOpen(true);
                      // }}
                    >
                      About Us
                    </HashLink>
                    {/* {isAboutUsOpen && (
                      <ul className="p-2">
                        <li>
                          <a>Mission & Vision</a>
                        </li>
                        <li>
                          <a>Aims & Objects</a>
                        </li>
                        <li>
                          <a>Special Features</a>
                        </li>
                        <li>
                          <a>Administration</a>
                        </li>
                        <li>
                          <a>Teachers</a>
                        </li>
                      </ul>
                    )} */}
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navbarDetails.map((nav) => (
                <WebNavMenu key={nav.key} data={nav}></WebNavMenu>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
