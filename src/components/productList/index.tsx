import { Link, useSearchParams } from "react-router-dom";

// ================ Types =================== \\
import { ProductListType } from "../../types/components.type";

const ProductList = ({ data, category, className = "" }: ProductListType) => {
  // === get Query
  const [searchParams] = useSearchParams();
  const productTitle = searchParams.get("product");

  return (
    <ul
      className={`${className} gap-4 px-8 py-8 flex flex-col bg-[#f5f5f5] max-w-xl w-full`}
    >
      {data?.map((el) => (
        <Link to={{ search: `?category=${category}&product=${el.title}` }}>
          <li
            className={`${
              productTitle === el.title ? "!text-[#2680EB]" : ""
            } hover:text-[#2680EB] first-letter:uppercase cursor-pointer text-start text-black text-sm text-nowrap`}
          >
            {el.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProductList;
