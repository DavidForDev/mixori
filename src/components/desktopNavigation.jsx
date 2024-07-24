import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";
import React from "react";

// ================ Icons =================== \\
import LogoIcon from "../assets/icons/logo";
import SearchIcon from "../assets/icons/search";

// ================ UI Components =================== \\
import { PrimaryInput } from "./ui/inputs.ui";
import { SwitchButton } from "./ui/buttons.ui";

// ================ Local Components =================== \\
import MenuCard from "./menuCard";
import SearchContainer from "./searchContainer";

// ================ Local Database =================== \\
import { mainMenu } from "../db/menu";

const Navigation = () => {
  const [searchStatus, setSearchStatus] = useState(false);

  // Open search
  const openSearch = () => setSearchStatus(true);

  // Close search
  const closeSearch = () => setSearchStatus(false);

  // color change
  const pathname = useResolvedPath().pathname;
  let color = "";

  if (
    pathname === "/current-projects" ||
    pathname === "/finished-projects" ||
    pathname === "/products" ||
    pathname === "/product-detail" ||
    pathname === "/contact" ||
    pathname === "/about-us" ||
    pathname === "/partners" ||
    pathname === "/news" ||
    pathname === "/news-detail"
  ) {
    color = "black";
  } else {
    color = "white";
  }

  return (
    <div className="w-full absolute top-0 left-0 px-10 py-3 z-50">
      <nav className="flex items-center justify-between transition-all">
        <div className="flex items-center gap-8">
          <LogoIcon width={115} />
          <ul className="flex items-center gap-8">
            {mainMenu.map((menuItem, index) => (
              <MenuCard
                key={index}
                name={menuItem.name}
                href={menuItem.href}
                subMenu={menuItem.subMenu}
              />
            ))}
          </ul>
        </div>
        <div className="flex gap-3">
          <PrimaryInput
            type="text"
            placeholder="search"
            className="max-w-64 cursor-pointer"
            onClick={openSearch}
            darkMode={{ status: false, initialColor: color }}
            icon={
              <SearchIcon
                width={22}
                height={22}
                className={`stroke-white cursor-pointer ${
                  color === "white" ? "stroke-white" : "stroke-black"
                }`}
              />
            }
          />

          <SwitchButton
            darkMode={{ status: false, initialColor: color }}
            className="first-letter:uppercase h-full px-4"
          >
            ge
          </SwitchButton>
        </div>
      </nav>
      <SearchContainer openStatus={searchStatus} onClose={closeSearch} />
    </div>
  );
};

export default Navigation;
