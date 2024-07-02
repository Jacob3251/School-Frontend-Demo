import { useContext, useState } from "react";
import { NavigationContext } from "../../../contexts/MainContext";
import { HashLink } from "react-router-hash-link";

const WebNavMenu = ({ data }) => {
  const { key, title, subMenu, hashLink } = data;
  const { openedNav, setOpenedNav } = useContext(NavigationContext);
  // console.log(key);
  const handleOpenNav = () => {
    setOpenedNav(key);
  };

  return (
    <li className="text-black font-semibold">
      <div
        className="w-full h-full"
        onMouseOver={handleOpenNav}
        open={openedNav === key}
      >
        <HashLink smooth to={`/#${hashLink}`}>
          {title}
        </HashLink>

        {/* <ul className="p-2 bg-white !z-[30]">
          {subMenu.map((item, index) => (
            <li
              className="!z-30"
              onClick={() => setOpenedNav(false)}
              key={index}
            >
              <a>{item.title}</a>
            </li>
          ))}
        </ul> */}
      </div>
    </li>
  );
};

export default WebNavMenu;
