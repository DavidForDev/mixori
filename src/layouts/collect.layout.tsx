// ================ Types =================== \\
import { CollectLayoutTypes } from "../types/layouts.type";

const CollectLayout = ({
  children,
  banner = {},
  reverse = false,
  className = "",
}: CollectLayoutTypes) => {
  const { image = "", bgColor = "", className: bannerClassName = "" } = banner;
  const reverseStyle = reverse ? "md:flex-row-reverse" : "";

  return (
    <div
      className={`flex ${reverseStyle} ${className} relative items-stretch flex-col md:flex-row h-full`}
    >
      <div className="flex-1">
        <div
          className={`w-full h-svh ${bgColor} ${bannerClassName} bg-center`}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="flex-1 flex py-16  items-center justify-center h-svh self-stretch">
        {children}
      </div>
    </div>
  );
};

export default CollectLayout;
