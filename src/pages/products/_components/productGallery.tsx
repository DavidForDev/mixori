import { useState } from "react";

// ================ Types =================== \\
import { ProductGalleryTypes } from "../../../types/_components.type";

const ProductGallery = ({ data, className = "" }: ProductGalleryTypes) => {
  const [currentImage, setCurrentImage] = useState<string>("");

  const selectImageHandle = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div
      className={`${className} flex flex-col justify-start md:flex-row gap-4 w-full md:max-h-60 h-full`}
    >
      <div className="flex-[1_0_60%]">
        <img
          src={currentImage ? currentImage : data?.[0]}
          alt="img"
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      <div className="flex-[0_1_auto] flex md:grid md:grid-cols-2 overflow-auto items-start w-full md:w-fit gap-4">
        {data?.map((el) => (
          <img
            src={el}
            alt="img"
            onClick={() => selectImageHandle(el)}
            className={`${
              el === currentImage ? "border-[#2680EB]" : ""
            } w-full md:h-full h-28 object-cover cursor-pointer border border-solid hover:border-[#2680EB] transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
