import { useState } from "react";

// ================ Icons =================== \\
import LogoIcon from "../assets/icons/logo";
import BurgerIcon from "../assets/icons/burger";
import SearchIcon from "../assets/icons/search";
import CloseIcon from "../assets/icons/close";

// ================ UI Components =================== \\
import { PrimaryInput } from "./ui/inputs.ui";
import { SwitchButton } from "./ui/buttons.ui";

// ================ Local Components =================== \\
import MenuCardMobile from "./menuCardMobile";
import SearchContainer from "./searchContainer";

// ================ local Database =================== \\
import { mainMenu } from "../db/menu.js";

const MobileNavigation = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

  const toggleHandle = () => {
    if (menuStatus === true) {
      setToggleSearch(false);
    }
    setMenuStatus(!menuStatus);
  };

  const searchStatusHandle = () => {
    setToggleSearch(!toggleSearch);
  };

  return (
    <div className="w-full absolute left-0 top-0 py-3 z-50 ">
      <nav
        className={`w-full flex items-center justify-between transition-all px-4`}
      >
        <LogoIcon width={80} />

        {menuStatus ? (
          <CloseIcon className="cursor-pointer" onClick={toggleHandle} />
        ) : (
          <BurgerIcon className="cursor-pointer" onClick={toggleHandle} />
        )}
      </nav>
      <SearchContainer
        openStatus={toggleSearch}
        onClose={searchStatusHandle}
        className="top-24"
      />
      {menuStatus && (
        <div className="h-svh bg-white left-0 fixed w-full top-0 -z-30 pt-28 py-6 px-4 flex flex-col gap-10 items-center">
          <PrimaryInput
            type="text"
            placeholder="search"
            className="max-w-full w-full cursor-pointer py-6"
            onClick={searchStatusHandle}
            icon={
              <SearchIcon
                width={32}
                height={32}
                className="cursor-pointer stroke-black"
              />
            }
          />
          <ul className="flex flex-col items-center gap-10 w-full relative">
            {mainMenu.map((el, index) => (
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
            <SwitchButton
              darkMode={{ status: true, initialColor: "" }}
              className=" h-full px-4"
            >
              ge
            </SwitchButton>
            <SwitchButton
              darkMode={{ status: true, initialColor: "" }}
              className=" h-full px-4"
            >
              en
            </SwitchButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
