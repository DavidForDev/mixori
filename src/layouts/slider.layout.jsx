import { useEffect, useState } from "react";

// ================ Icons =================== \\
import LeftIcon from "../assets/icons/left";
import RightIcon from "../assets/icons/right";

const SliderLayout = ({ slideData, autoSliderDelay = 3000 }) => {
  const [stage, setStage] = useState(0);

  const leftHandle = () => {
    setStage((prevStage) =>
      prevStage === 0 ? slideData.length - 1 : prevStage - 1
    );
  };

  const rightHandle = () => {
    setStage((prevStage) =>
      prevStage === slideData.length - 1 ? 0 : prevStage + 1
    );
  };

  // automatic
  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prevStage) =>
        prevStage === slideData.length - 1 ? 0 : prevStage + 1
      );
    }, autoSliderDelay);

    return () => clearInterval(interval);
  }, [slideData.length, autoSliderDelay]);

  return (
    <div className="relative overflow-hidden h-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${stage * 100}%)` }}
      >
        {slideData.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`slide-${index}`}
            className="object-cover h-full w-full flex-shrink-0"
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-between md:justify-end px-3 py-5 gap-10 z-40 absolute top-0 w-full h-full">
        <h1 className="text-9xl text-[#ED9422] -rotate-90 z-30 self-start">{`0${
          stage + 1
        }`}</h1>
        <div className="flex gap-3 justify-end md:justify-start w-full md:px-8">
          <LeftIcon
            onClick={leftHandle}
            className="cursor-pointer fill-white"
            width={25}
            height={25}
          />
          <RightIcon
            onClick={rightHandle}
            className="cursor-pointer fill-white"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default SliderLayout;
