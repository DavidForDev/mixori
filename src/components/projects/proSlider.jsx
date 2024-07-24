import Slider from "react-slick";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";
import { PrimaryButton } from "../ui/buttons.ui";

const ProSlider = ({ label }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightIcon />,
    prevArrow: <LeftIcon />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-start justify-center h-full w-full gap-6">
      <h3 className="first-letter:uppercase text-black text-2xl text-center md:text-start w-full">
        {label}
      </h3>
      <div className="flex flex-col w-full gap-10 md:gap-0">
        <Slider
          {...settings}
          className="w-full"
          dotsClass="slick-dots w-full !flex md:justify-end justify-center"
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
        <div className="flex flex-col w-full items-start gap-5">
          <p className="hidden md:block">project name</p>
          <PrimaryButton className="!w-full md:!w-fit">
            see project
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProSlider;
