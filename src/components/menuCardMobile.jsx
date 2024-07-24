import React, { useState } from "react";
import { Link } from "react-router-dom";

// ================ Icons =================== \\
import CaretArrow from "../assets/icons/caretArrow";

const MenuCardMobile = ({ name, href = "", onCloseMenu, subMenu }) => {
  const [subMenuStatus, setSubMenuStatus] = useState(false);

  const subMenuHandle = (href) => {
    setSubMenuStatus(!subMenuStatus);

    if (href && onCloseMenu) onCloseMenu();
  };

  const openStyle = subMenuStatus ? "flex" : "hidden";

  return (
    <div className="group transition-all">
      <Link
        to={href}
        className="flex items-center gap-2"
        onClick={() => subMenuHandle(href)}
      >
        <li className="cursor-pointer group-hover:text-[#2680EB] text-xl first-letter:uppercase font-medium text-black transition-all duration-300">
          {name}
        </li>
        {subMenu && subMenu?.length > 0 && (
          <CaretArrow
            width={17}
            height={17}
            className="group-hover:fill-[#2680EB] transition-all duration-300 -rotate-90 md:rotate-0"
          />
        )}
      </Link>
      {subMenu && subMenu.length > 0 && (
        <div
          className={`${openStyle} bg-white justify-center flex w-full h-svh z-50 py-6 px-10 absolute top-0 left-0 transition-all duration-300`}
        >
          <ul className="flex flex-col gap-10">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => subMenuHandle()}
            >
              <CaretArrow
                className="rotate-90 fill-black/30"
                width={23}
                height={23}
              />
              <h3 className="text-black/30 text-2xl first-letter:uppercase">
                go back
              </h3>
            </div>
            {subMenu?.map((el, index) => (
              <Link
                key={index}
                to={el.href}
                onClick={() => subMenuHandle(el.href)}
              >
                <li className="text-black cursor-pointer first-letter:uppercase text-nowrap text-lg hover:text-[#2680EB]">
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCardMobile;
