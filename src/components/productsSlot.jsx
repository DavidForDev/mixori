import React, { useRef } from "react";

import { Link, useSearchParams } from "react-router-dom";
import Slider from "react-slick";

// ================ Icons =================== \\
import ArrowIcon from "../assets/icons/arrow";
import RightIcon from "../assets/icons/right";
import LeftIcon from "../assets/icons/left";

// ================ Local Components =================== \\
import Categories from "./categories";
import ProductCard from "./productCard";
import ProductList from "./productList";

// ================ Local Database =================== \\
import { mainCategory } from "../db/categories.js";

const ProductsSlot = () => {
  const sliderRef = useRef(null);

  // === get Query
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const getCategory = mainCategory.find(
    (x) => x.categoryName === categoryQuery
  );

  // === Arrows function
  const nextArrowHandle = () => {
    sliderRef.current.slickNext();
  };

  const prewArrowHandle = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
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
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  const products = [
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
    {
      title:
        "SLEEPERS FOR CURVES LESS THAN 350M WITH IT’S GAUGE WIDENING SLEEPER SETS",
      image: "/images/products/product-1.png",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] md:px-10 px-4 py-10 md:pb-16 flex h-full flex-col gap-8 w-full overflow-auto">
      <div className="flex items-center gap-10">
        <ArrowIcon width={55} height={55} stroke="#2680EB" />
        <p className="text-[#2680EB] text-4xl">production</p>
      </div>
      <div className="flex flex-col gap-6">
        <Categories />
      </div>
      <div className="w-full items-center flex justify-between flex-wrap gap-6">
        <ProductList
          className="!flex-row !px-0 !py-0 overflow-auto invisible-scroll relative"
          data={getCategory?.subCategories}
          dividerLine={true}
        />
        <p className="first-letter:uppercase text-[#2680EB] cursor-pointer hidden md:block">
          view all
        </p>
      </div>
      <div className="relative flex flex-col gap-7 justify-end w-full">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
          dotsClass="slick-dots !-bottom-[46px]"
        >
          {products.map((product, index) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </Slider>
        <div className="items-center gap-4 w-full justify-end hidden md:flex">
          <LeftIcon
            width={24}
            height={24}
            onClick={prewArrowHandle}
            className="cursor-pointer"
          />
          <RightIcon
            width={24}
            height={24}
            onClick={nextArrowHandle}
            className="cursor-pointer"
          />
        </div>
      </div>
      <p className="first-letter:uppercase text-[#2680EB] cursor-pointer block md:hidden  text-center">
        view all
      </p>
    </div>
  );
};

export default ProductsSlot;
