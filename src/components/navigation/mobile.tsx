import { useState } from "react";

// ================ Icons =================== \\
import LogoIcon from "../../assets/icons/logo";
import BurgerIcon from "../../assets/icons/burger";
import SearchIcon from "../../assets/icons/search";

// ================ UI Components =================== \\
import { PrimaryInput } from "../ui/inputs.ui";
import { SwitchButton } from "../ui/buttons.ui";

// ================ Local Components =================== \\
import MenuCardMobile from "./_components/menuCardMobile";
import SearchContainer from "./_components/searchContainer";
import Languages from "../languages";

const MobileNavigation = () => {
  const [toggleSearch, setToggleSearch] = useState<boolean>(false);
  const [menuStatus, setMenuStatus] = useState<boolean>(false);

  const toggleHandle = () => {
    setMenuStatus(!menuStatus);
  };

  const searchStatusHandle = () => {
    setToggleSearch(!toggleSearch);
  };

  // test menu array
  const menuBase = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "company",
      subMenu: [
        {
          name: "about us",
          href: "/about-us",
        },
        {
          name: "our partners",
          href: "/partners",
        },
        {
          name: "news",
          href: "/news",
        },
      ],
    },
    {
      name: "products",
      subMenu: [
        {
          name: "product 1",
          href: "/about-us",
        },
        {
          name: "product 2",
          href: "/partners",
        },
        {
          name: "product 3",
          href: "/news",
        },
      ],
    },
    {
      name: "projects",
      subMenu: [
        {
          name: "finished projects",
          href: "/finished-projects",
        },
        {
          name: "current projects",
          href: "/current-projects",
        },
      ],
    },
    {
      name: "contact",
      subMenu: [
        {
          name: "contact 1",
          href: "/contact",
        },
        {
          name: "contact 2",
          href: "/contact",
        },
      ],
    },
  ];

  return (
    <div className="w-full fixed left-0 top-0 py-3 z-50 ">
      <nav
        className={`w-full flex items-center justify-between transition-all px-10`}
      >
        <LogoIcon width={80} />

        <BurgerIcon className="cursor-pointer" onClick={toggleHandle} />
      </nav>
      <SearchContainer openStatus={toggleSearch} onClose={searchStatusHandle} />
      {menuStatus && (
        <div className="h-svh bg-white left-0 fixed w-full top-0 -z-30 pt-28 py-6 px-10 flex flex-col gap-10 items-center">
          <PrimaryInput
            type="text"
            placeholder="search"
            className="max-w-full cursor-pointer"
            onClick={searchStatusHandle}
            icon={
              <SearchIcon width={22} height={22} className="cursor-pointer" />
            }
          />
          <ul className="flex flex-col items-center gap-10 w-full relative">
            {menuBase.map((el, index) => (
              <MenuCardMobile
                name={el.name}
                href={el.href}
                subMenu={el.subMenu}
                onCloseMenu={toggleHandle}
                key={index}
              />
            ))}
          </ul>
          <div className="border-t border-solid border-black/30 py-7 flex justify-center gap-8 w-full">
            <Languages />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
