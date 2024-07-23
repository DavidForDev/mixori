// ================ Icons =================== \\
import EyeIcon from "../../../assets/icons/eye.jsx";

// ================ Types =================== \\
import { NewsCardTypes } from "../../../types/components.type.js";

const NewsCard = ({
  id = "",
  image,
  title,
  subDescription,
  year,
}: NewsCardTypes) => {
  return (
    <div className="border-t py-6 md:py-0 md:!border-r md:!border-t-0 border-solid border-black/20 px-12 flex flex-col gap-5">
      <div className="w-full relative overflow-hidden group">
        <img
          src={image}
          alt="image_news"
          className=" group-hover:scale-110 transition-all duration-300"
        />
        <div className="w-full h-full group-hover:opacity-100 opacity-0 flex transition-all duration-300 absolute top-0 left-0 bg-white/50 items-center justify-center">
          <EyeIcon />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[#2680EB] text-xl first-letter:uppercase">
          {title}
        </h3>
        <p className="text-sm">{subDescription}</p>
        <span className="text-black/50 text-xl">{year}</span>
      </div>
    </div>
  );
};

export default NewsCard;
