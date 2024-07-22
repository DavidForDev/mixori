// ----------------------- Layouts ------------------------- \\
import SliderLayout from "../../layouts/slider.layout";

// ----------------------- UI ------------------------- \\
import { PrimaryButton } from "../ui/buttons.ui";

const HeroContainer = () => {
  const images = [
    "/images/bg.png",
    "/images/service-1.png",
    "/images/service-2.png",
  ];

  return (
    <div className="flex items-start h-full flex-col md:flex-row">
      <div className="w-full h-full flex-1 flex py-10 pt-28">
        <div className="flex h-full flex-col items-start justify-end gap-5 px-10">
          <h1 className="text-5xl md:text-[70px] leading-snug capitalize md:w-[530px] max-w-xl font-medium text-start">
            <span className="text-[#2680EB]">building a future</span> with our
            team
          </h1>
          <p className=" text-start">
            Our main task is to establish an international standard and quality
            in the Georgian market.
          </p>
          <PrimaryButton>view more</PrimaryButton>
        </div>
      </div>
      <div className="h-full w-full flex-1 relative">
        <SliderLayout slideData={images} autoSliderDelay={12000} />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
      </div>
    </div>
  );
};

export default HeroContainer;
