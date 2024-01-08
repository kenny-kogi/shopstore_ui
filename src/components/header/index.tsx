import React from "react";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Menu } from "../menu";

const Header = () => {
  const profileMenu = {
    mainButton: <CgProfile size={30} style={{ border: "4px white " }} />,

    submenuItems: [
      {
        routeHref: `/api/auth/logout`,
        text: "Logout",
        icon: <MdLogout />,
      },
    ],
  };

  return (
    <header className="z-10 y-10 min-h-[40px]">
      <div className="flex items-center justify-between h-full px-4 text-defaultGreen bg-slate-500">
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-defaultGreen"></div>
        </div>
        <ul className="flex right-6 pt-2 absolute items-center flex-shrink-0 space-x-4 outline-4 outline-white">
          <h1 className="text-badge text-text uppercase hidden lg:inline-block font-semibold mr-3 lg:ml-auto">
            Welcome, <span className="text-darkBlue">{"KENNY"}</span>
          </h1>
          <li>
            <Menu
              mainButton={profileMenu.mainButton}
              submenuItems={profileMenu.submenuItems}
            />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
