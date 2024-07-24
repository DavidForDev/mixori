// ================ Icons =================== \\
import CaretArrow from "../../../assets/icons/caretArrow";
import TeamIcon from "../../../assets/icons/team";

// ================ Components =================== \\
import ContactForm from "../../../components/contact";
import ProductGallery from "../_components/productGallery";
import Products from "../../../components/products";
import ProPath from "../_components/path";

// ================ UI =================== \\
import { PrimaryButton } from "../../../components/ui/buttons.ui";

const ProductDetailPage = () => {
  const products = [
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title: "sleepers for curves less than 350m ",
      image: "/images/products/product-1.png",
    },
    {
      title: "sleepers for curves less than 350m ",
      image: "/images/products/product-1.png",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="bg-[#F5F5F5] flex-1 pt-28 py-6 flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <ProPath />
          <h3 className="text-xl font-bold uppercase text-black md:hidden flex px-4">
            REGULAR CONCRETE SLEEPERS 1435 MM
          </h3>
          <ProductGallery
            data={[
              "/images/products/product-1.png",
              "/images/service-1.png",
              "/images/service-2.png",
              "/images/bg.png",
            ]}
            className="px-4 md:px-14"
          />
        </div>
        <div className="flex flex-col gap-8 px-4 md:px-14 pr-5">
          <h3 className="text-xl font-bold uppercase text-black hidden md:flex">
            REGULAR CONCRETE SLEEPERS 1435 MM
          </h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-black/20 font-bold">specifications:</h4>
            <p className="w-80 text-base">
              Concrete Class B40 Sleeper Length 2700 Type of Rail R-65 and R-50
              Nominal maximum weight of sleeper 319 kg Outer to outer shoulder
              spacing to produce nominal track gauge of 1435 mm, assuming all
              parts nominal size and rail in contact with outer insulator, see
              Pandrol drawing. Design: Sleepers designed to withstand 25 Tonne
              Axle Load - 160 Km/h Spacing 0.543m Volume of sleeper 0.128 m^3’
              Freeze resistant F200
            </p>
          </div>
          <div className="w-full flex justify-between items-end">
            <PrimaryButton className="!bg-[#ED9422] w-full md:w-fit gap-1 flex-col flex items-center">
              <div className="flex items-end gap-5">
                <TeamIcon />
                <p className="text-white font-bold">sales team</p>
              </div>
              <p className="text-white/50 text-xl">032 2 111 222</p>
            </PrimaryButton>
            <div className="items-center justify-center gap-1 cursor-pointer hidden md:flex">
              <CaretArrow
                className="rotate-90 fill-[#2680EB]"
                width={15}
                height={15}
              />
              <p className="text-[#2680EB] first-letter:uppercase text-nowrap">
                go back
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 pt-28 flex-col flex gap-6">
        <div className="flex  flex-col gap-5 px-4 md:px-7 ">
          <h3 className="text-xl uppercase text-black font-bold">
            Same categorie products
          </h3>
          <Products position="horizontal" data={products} />
        </div>
        <div className="bg-[#ED9422] py-10 px-4 md:p-14 self-stretch flex-1 flex items-center justify-center">
          <ContactForm className="max-w-sm m-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
