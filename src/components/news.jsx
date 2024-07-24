import React from "react";
import Slider from "react-slick";

// ================ Local Components =================== \\
import NewsCard from "./newsCard";

// ================ Local Database =================== \\
import { mainNews } from "../db/news";

const News = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: mainNews.length,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden px-4 md:px-0">
      <Slider {...settings} className="hidden md:block">
        {mainNews.map((el) => (
          <NewsCard
            key={el.id}
            title={el.title}
            subDescription={el.subDescription}
            image={el.image}
            id={el.id}
            year={el.year}
          />
        ))}
      </Slider>
      <div className="flex md:hidden flex-col gap-10">
        {mainNews.map((el) => (
          <NewsCard
            key={el.id}
            title={el.title}
            subDescription={el.subDescription}
            image={el.image}
            id={el.id}
            year={el.year}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
