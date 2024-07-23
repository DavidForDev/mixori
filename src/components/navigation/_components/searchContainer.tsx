// --------------------- Icon --------------------- \\
import CloseIcon from "../../../assets/icons/close";
import ProductCard from "../../products/_components/productCard";
import { PrimaryButton, SwitchButton } from "../../ui/buttons.ui";

// --------------------- UI --------------------- \\
import { PrimaryInput } from "../../ui/inputs.ui";

// ================ Types =================== \\
import { SearchContainerTypes } from "../../../types/components.type";

// ================ Components =================== \\
import Languages from "../../languages";
import Products from "../../products";

// ================ Local Database =================== \\
import ProductsDB from "../../../db/products.json";

const SearchContainer = ({
  openStatus = false,
  searchValue,
  onClose,
}: SearchContainerTypes) => {
  const styled = openStatus ? "w-full" : "!w-0 opacity-0";

  return (
    <div
      className={`${styled} overflow-auto fixed w-full h-full z-50 top-0 right-0 bg-black/70 transition-all duration-700`}
    >
      <div className="bg-white w-full transition-all duration-300 px-4 md:px-16 py-7 h-full z-50 max-w-full md:max-w-md float-right flex flex-col gap-3">
        <header className="flex flex-col gap-3">
          <div className="flex gap-5 w-full justify-end">
            <PrimaryInput
              type="text"
              placeholder="search"
              className="max-w-full"
              defaultValue={searchValue}
              darkMode={{ status: true, initialColor: "" }}
              icon={
                <CloseIcon
                  width={22}
                  height={22}
                  onClick={onClose}
                  className="cursor-pointer"
                />
              }
            />
            <Languages darkMode={{ status: false, initialColor: "" }} />
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-xs text-[#b3b3b3] cursor-pointer">
              search result <span>8</span>
            </p>
            <p className="text-[#2680EB] text-xs cursor-pointer first-letter:uppercase">
              clear search
            </p>
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          <div className="h-full w-full flex flex-col gap-10 items-center overflow-auto">
            <Products position="vertical" data={ProductsDB} />
            <div className="flex flex-col gap-5 items-center">
              <p className="text-[#2680EB]">
                Didn’t find what you searched for?
              </p>
              <PrimaryButton>contact us</PrimaryButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SearchContainer;
