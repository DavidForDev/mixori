import { useParams, useSearchParams } from "react-router-dom";

// ================ Icons =================== \\
import CaretArrow from "../../../assets/icons/caretArrow";
import TeamIcon from "../../../assets/icons/team";

// ================ Components =================== \\
import ContactForm from "../../../components/contact";
import ProductCard from "../../../components/products/_components/productCard";
import { PrimaryButton } from "../../../components/ui/buttons.ui";
import ProductGallery from "../_components/productGallery";

// ================ Hooks =================== \\
import UseNavColorMode from "../../../hooks/useNavColorMode";

// ================ Local Database =================== \\
import ProductsDB from "../../../db/products.json";
import Products from "../../../components/products";

const ProductDetailPage = () => {
  // get Query
  const query = useParams();
  const productId = query.productId;

  // filter Product
  const currentProduct = ProductsDB.find((x) => x.id === productId);

  //  appropriate Products
  const sameProducts = ProductsDB.filter(
    (x) => x.category === currentProduct?.category
  ).slice(0, 3);

  UseNavColorMode("border-black");

  return (
    <div className="w-full flex items-stretch h-full flex-col md:flex-row">
      <div className="bg-[#F5F5F5] flex-1 pt-28 py-6 h-fit flex flex-col gap-7">
        <div className="flex items-center gap-4 text-sm px-4 md:px-14 text-nowrap flex-wrap">
          <p>products</p>
          <CaretArrow width={18} height={18} className="-rotate-90" />
          <p>Railway constructions</p>
          <CaretArrow width={18} height={18} className="-rotate-90" />
          <p className="text-[#2680EB]">product name</p>
        </div>
        <ProductGallery
          data={currentProduct?.images}
          className="px-4 md:px-14"
        />
        <div className="flex flex-col gap-8 px-4 md:px-14 pr-5">
          <h3 className="text-xl font-bold uppercase text-black">
            {currentProduct?.title}
          </h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-black/20 font-bold">specifications:</h4>
            <p className="w-80 text-base">{currentProduct?.description}</p>
          </div>
          <div className="w-full flex justify-between items-end">
            <PrimaryButton className="!bg-[#ED9422] w-full gap-1 flex-col flex items-center">
              <div className="flex items-end gap-5">
                <TeamIcon />
                <p className="text-white font-bold">sales team</p>
              </div>
              <p className="text-white/50 text-xl">
                {currentProduct?.contact.number}
              </p>
            </PrimaryButton>
            <div className="items-center justify-center gap-1 cursor-pointer hidden md:flex">
              <CaretArrow
                className="rotate-90 fill-[#2680EB]"
                width={15}
                height={15}
              />
              <p className="text-[#2680EB] first-letter:uppercase ">go back</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 self-stretch pt-28 py-2 h-full flex-col gap-8 flex">
        <div className="flex h-full flex-col gap-5 px-4 md:px-14 flex-1">
          <h3 className="text-xl uppercase text-black font-bold">
            Same categorie products
          </h3>
          <Products data={sameProducts} />
        </div>
        <div className="bg-[#ED9422] p-14 md:p-14 self-stretch flex items-center justify-center">
          <ContactForm className="max-w-sm m-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
