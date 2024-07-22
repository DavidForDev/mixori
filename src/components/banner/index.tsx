// ================ Types =================== \\
import { BannerType } from "../../types/components.type";

export const PrimaryBanner = ({ image, className = "" }: BannerType) => {
  return (
    <div className={`w-full ${className}`}>
      <div
        style={{ background: `url(${image})`, backgroundRepeat: "no-repeat" }}
        className="w-full h-full bg-no-repeat bg-cover transition-all duration-500"
      />
    </div>
  );
};

export const SecondaryBanner = () => {
  return (
    <div className="w-full bg-[#2680EB] px-10 grid grid-cols-1  md:grid-cols-4 relative max-h-fit py-10 gap-3 items-start">
      <img src="/images/service-1.png" alt="banner" className="h-full " />

      <div className="flex flex-col gap-12 self-end">
        <h3 className="text-white text-6xl text-center">Working process</h3>
        <img
          src="/images/service-2.png"
          alt="banner"
          className="h-36 object-cover"
        />
      </div>

      <img src="/images/bg.png" alt="banner" className="h-full" />

      <div className="flex flex-col gap-3 ">
        <div className="flex gap-3 w-36">
          <img
            src="/images/service-1.png"
            alt="banner"
            className="w-full flex-1"
          />
          <img
            src="/images/service-2.png"
            alt="banner"
            className="w-full flex-1"
          />
        </div>
        <h3 className="text-white text-4xl">
          The trust we have is most important for us
        </h3>
      </div>
    </div>
  );
};
