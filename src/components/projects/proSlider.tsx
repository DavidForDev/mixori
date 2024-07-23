import Slider from "react-slick";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";
import { PrimaryButton } from "../ui/buttons.ui";

export interface ProSliderTypes {
  label?: string;
  images?: string[];
}

const ProSlider = ({ label, images }: ProSliderTypes) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightIcon />,
    prevArrow: <LeftIcon />,
  };

  return (
    <div className="flex flex-col items-start justify-center h-full w-full gap-6">
      <h3 className="first-letter:uppercase text-black text-2xl">{label}</h3>
      <div className="flex flex-col w-full">
        <Slider
          {...settings}
          className="w-full"
          dotsClass="slick-dots w-full !flex justify-end"
        >
          <img
            src="/images/service-1.png"
            alt="img"
            className="w-full float-left"
          />
          <img
            src="/images/service-2.png"
            alt="img"
            className="w-full float-left"
          />
          <img src="/images/bg.png" alt="img" className="w-full float-left" />
        </Slider>
        <div className="flex flex-col items-start gap-5">
          <p>project name</p>
          <PrimaryButton>see project</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProSlider;
