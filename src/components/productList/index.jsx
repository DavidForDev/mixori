import { Link, useSearchParams } from "react-router-dom";

const ProductList = ({ data, category, className = "", dividerLine }) => {
  // === get Query
  const [searchParams] = useSearchParams();
  const productTitle = searchParams.get("product");

  const dividerLineStyle = dividerLine
    ? "before:content-[''] before:absolute before:bottom-0 before:translate-x-3 before:right-0 before:w-[1px] before:h-full before:bg-[#2680EB]"
    : "";

  return (
    <ul
      className={`${className} gap-4 px-8 py-8 flex flex-col bg-[#f5f5f5] max-w-xl w-full relative `}
    >
      {data?.map((el, index) => (
        <Link
          to={{ search: `?category=${category}&product=${el.title}` }}
          className="relative"
        >
          <li
            className={`${productTitle === el.title ? "!text-[#2680EB]" : ""} ${
              index !== data.length - 1 ? dividerLineStyle : ""
            } border-solid border-[#2680EB] hover:text-[#2680EB] first-letter:uppercase px-3 cursor-pointer text-start text-black text-sm text-nowrap`}
          >
            {el.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ProductList;
