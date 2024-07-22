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
      className={`${className} flex flex-col md:flex-row max-h-full items-stretch h-full gap-4`}
    >
      <img
        src={currentImage ? currentImage : data?.[0]}
        alt="img"
        className="h-full w-full max-w-full md:max-w-80 object-cover transition-all duration-300"
      />
      <div className="flex md:grid md:grid-cols-2 overflow-auto w-full md:w-fit self-stretch gap-4">
        {data?.map((el) => (
          <img
            src={el}
            alt="img"
            onClick={() => selectImageHandle(el)}
            className={`${
              el === currentImage ? "border-[#2680EB]" : ""
            } max-h-28 max-w-28 w-full h-full object-cover cursor-pointer border border-solid hover:border-[#2680EB] transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
