import { useEffect, useState } from "react";

// ================ Icons =================== \\
import LogoIcon from "../../assets/icons/logo";
import SearchIcon from "../../assets/icons/search";

// ================ UI Components =================== \\
import { PrimaryInput } from "../ui/inputs.ui";
import { SwitchButton } from "../ui/buttons.ui";

// ================ Local Components =================== \\
import MenuCard from "./_components/menuCard";
import SearchContainer from "./_components/searchContainer";

// ================ State Management =================== \\
import { useColorMode } from "../../store/components.store";

// ================ Local Database =================== \\
import menuBase from "../../db/menu.json";
import Languages from "../languages";

const Navigation = () => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const { color } = useColorMode();

  // Handle scroll to toggle sticky state
  const handleScroll = () => setIsSticky(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open search
  const openSearch = () => setSearchStatus(true);

  // Close search
  const closeSearch = () => setSearchStatus(false);

  // Conditional styles
  const scrollStyle = isSticky ? "bg-white px-5 py-2 rounded-md shadow-md" : "";

  // multi Language

  return (
    <div className="w-full fixed left-0 top-0 px-10 py-3 z-50">
      <nav
        className={`flex items-center justify-between transition-all ${scrollStyle}`}
      >
        <div className="flex items-center gap-8">
          <LogoIcon width={115} />
          <ul className="flex items-center gap-8">
            {menuBase.map((menuItem, index) => (
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
            darkMode={{ status: isSticky, initialColor: color }}
            icon={
              <SearchIcon
                width={22}
                height={22}
                className={`${isSticky ? "stroke-black" : ""} cursor-pointer`}
              />
            }
          />
          <Languages darkMode={{ status: isSticky, initialColor: color }} />
        </div>
      </nav>
      <SearchContainer openStatus={searchStatus} onClose={closeSearch} />
    </div>
  );
};

export default Navigation;
