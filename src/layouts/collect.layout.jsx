// ================ Types =================== \\
import OpacityDivs from "../components/gradient";

const CollectLayout = ({
  children,
  banner = {},
  reverse = false,
  className = "",
  colorLine = "",
}) => {
  const { image = "", bgColor = "", className: bannerClassName = "" } = banner;
  const reverseStyle = reverse ? "md:flex-row-reverse" : "";

  return (
    <div
      className={`flex items-stretch ${reverseStyle} flex-col md:flex-row relative`}
    >
      <div className="flex-1 flex justify-center items-center bg-[#F5F5F5]">
        <div
          className={`w-full ${bgColor} ${bannerClassName} bg-center h-svh`}
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
