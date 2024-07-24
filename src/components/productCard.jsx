import React from "react";

// ================ Icons =================== \\
import CaretArrow from "../assets/icons/caretArrow";

const ProductCard = ({ className = " ", data }) => {
  const { title, image } = data;

  return (
    <div
      className={`${className} mr-3 w-full rounded-sm group flex flex-col gap-3 cursor-pointer bg-white p-5 px-6 transition-all duration-300 border border-solid border-transparent hover:border-[#2680EB]`}
    >
      <div className="bg-[#2680EB]/30 rounded-full p-1 w-fit opacity-0 group-hover:opacity-100 transition-all duration-300">
        <CaretArrow
          className="-rotate-90 fill-[#2680EB]"
          width={13}
          height={13}
        />
      </div>
      <img src={image} alt="product" className="object-cover" />
      <p className="lowercase group-hover:text-[#2680EB] transition-all duration-300 text-xs text-start">
        {title}
      </p>
    </div>
  );
};

export default ProductCard;
