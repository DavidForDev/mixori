import React from "react";
// ================ Types =================== \\
import OpacityDivs from "../components/gradient";

const CollectLayout = ({
  children,
  banner = {},
  reverse = false,
  className = "",
  colorLine = "",
}) => {
  const {
    image = "",
    bgColor = "",
    className: bannerClassName = "",
    centerImage = false,
  } = banner;
  const reverseStyle = reverse ? "md:flex-row-reverse" : "";
  const centerImageStyle = centerImage
    ? "flex justify-center items-center h-svh"
    : "block";

  return (
    <div
      className={`flex items-stretch ${reverseStyle} flex-col md:flex-row relative`}
    >
      <div className={`flex-1 flex ${centerImageStyle} bg-[#F5F5F5]`}>
        <div
          className={`w-full ${bgColor} ${bannerClassName} bg-center bg-no-repeat ${
            centerImage
              ? "max-w-[400px] max-h-[400px] 2xl:max-h-[450px] h-full w-full bg-contain"
              : "bg-cover"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div
        className={`${className} ${colorLine ? "relative" : ""} flex-1 py-16`}
      >
        {children}
        <OpacityDivs color={colorLine} className="absolute left-0 bottom-0" />
      </div>
    </div>
  );
};

export default CollectLayout;
