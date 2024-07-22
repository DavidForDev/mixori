// ================ Local Components =================== \\
import ProductCard from "./_components/productCard";

// ================ Local Components =================== \\
import { ProductsTypes } from "../../types/components.type";

// ================ UI =================== \\
import { SwitchButton } from "../ui/buttons.ui";

// ================ Icons =================== \\
import CaretArrow from "../../assets/icons/caretArrow";

const Products = ({
  position = "vertical",
  className = "",
  data,
}: ProductsTypes) => {
  const positionStyle = position === "horizontal" ? "flex-row" : "flex-col";

  return (
    <div
      className={`${positionStyle} ${className} w-full gap-12 text-center flex flex-col`}
    >
      {data?.length === 0 && (
        <h3 className="first-letter:uppercase text-3xl w-full text-black/50 text-center">
          no product yet
        </h3>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
