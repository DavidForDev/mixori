// ================ Local Components =================== \\
import ProductCard from "./_components/productCard";

// ================ UI =================== \\
import { SwitchButton } from "../ui/buttons.ui";

// ================ Icons =================== \\
import CaretArrow from "../../assets/icons/caretArrow";

const Products = ({ position = "vertical", className = "", data }) => {
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
      <div
        className={`${
          position === "horizontal"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            : "flex flex-col"
        }  gap-6`}
      >
        {data?.map((product) => (
          <ProductCard key={product.id} data={product} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default Products;
