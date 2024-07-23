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
import UseNavColorMode from "../../hooks/useNavColorMode";

const Navigation = () => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const { color } = useColorMode();

  // Open search
  const openSearch = () => setSearchStatus(true);

  // Close search
  const closeSearch = () => setSearchStatus(false);

  // Conditional styles
  UseNavColorMode("border-white");

  // multi Language

  return (
    <div className="w-full absolute top-0 left-0 px-10 py-3 z-50">
      <nav className="flex items-center justify-between transition-all">
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
          <Languages darkMode={{ status: false, initialColor: color }} />
        </div>
      </nav>
      <SearchContainer openStatus={searchStatus} onClose={closeSearch} />
    </div>
  );
};

export default Navigation;
