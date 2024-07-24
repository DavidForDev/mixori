import { useSearchParams } from "react-router-dom";

// ================ Icons =================== \\
import TeamIcon from "../assets/icons/team";
import CaretArrow from "../assets/icons/caretArrow";

// ================ Components =================== \\
import { PrimaryBanner, SecondaryBanner } from "../components/banner";
import Categories from "../components/categories";
import ProductList from "../components/productList";
import Products from "../components/products";
import DropDown from "../components/ui/dropdown.ui";
import { PrimaryButton, SwitchButton } from "../components/ui/buttons.ui";

// ================ Layouts =================== \\
import SectionLayout from "../layouts/section.layout";

// ================ Local Database =================== \\
import { mainCategory } from "../db/categories";

const ProductsPage = () => {
  // get Query
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category") || "all services";

  // category
  const getCategory = mainCategory.find(
    (x) => x.categoryName === categoryQuery
  );

  return (
    <div className="flex flex-col h-full pt-28 gap-12">
      <SectionLayout className="flex flex-col gap-3 px-5 md:px-10">
        <PrimaryBanner image={getCategory?.banner} className="h-48" />
        <div className="flex flex-col gap-4 ">
          <p className="text-sm text-[#2680EB]">categories</p>
          <div className="flex flex-col md:flex-row items-end justify-between gap-4">
            <Categories />
            <DropDown className="md:block hidden" />
          </div>
        </div>
      </SectionLayout>
      <SectionLayout className="px-5 md:px-10">
        <div className="flex w-full md:gap-32 gap-12 flex-col md:flex-row">
          <div className="flex flex-col gap-8">
            <ProductList
              category={categoryQuery ? categoryQuery : ""}
              className="max-w-xl"
            />
            <PrimaryButton className="!bg-[#ED9422] w-full gap-1 flex-col flex items-center">
              <div className="flex items-end gap-5">
                <TeamIcon />
                <p className="text-white font-bold text-nowrap">sales team</p>
              </div>
              <p className="text-white/50 text-xl text-nowrap">032 2 111 222</p>
            </PrimaryButton>

            <DropDown className="md:hidden block" />
          </div>
          <div className="flex flex-col items-center gap-14 w-full">
            <Products position="horizontal" className="w-full" />
            <div className="flex gap-4 w-fit m-auto">
              <SwitchButton
                className="group h-full"
                darkMode={{ status: true, initialColor: "" }}
              >
                <CaretArrow
                  width={13}
                  height={13}
                  className="rotate-90 group-hover:fill-white transition-all duration-300"
                />
              </SwitchButton>
              <SwitchButton
                className="flex items-center gap-2 group h-full"
                darkMode={{ status: true, initialColor: "" }}
              >
                <p>Next Page</p>
                <CaretArrow
                  width={13}
                  height={13}
                  className="-rotate-90 group-hover:fill-white transition-all duration-300"
                />
              </SwitchButton>
            </div>
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <SecondaryBanner />
      </SectionLayout>
    </div>
  );
};

export default ProductsPage;
