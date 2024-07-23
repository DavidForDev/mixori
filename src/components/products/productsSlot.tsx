import { Link, useSearchParams } from "react-router-dom";
import Slider from "react-slick";

// ================ Icons =================== \\
import ArrowIcon from "../../assets/icons/arrow";
import RightIcon from "../../assets/icons/right";
import LeftIcon from "../../assets/icons/left";

// ================ Local Components =================== \\
import Categories from "../categories";
import ProductCard from "./_components/productCard";
import ProductList from "../productList";

// ================ Local Database =================== \\
import CategoriesDB from "../../db/categories.json";
import ProductsDB from "../../db/products.json";

const ProductsSlot = () => {
  // === get Query
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  const getCategory = CategoriesDB.find(
    (x) => x.categoryName === categoryQuery
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: (
      <div>
        <RightIcon style={{ position: "absolute", bottom: "0" }} />
      </div>
    ),
    prevArrow: (
      <div>
        <LeftIcon style={{ position: "absolute", bottom: "0", right: "0" }} />
      </div>
    ),
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F5F5F5] px-10 py-10 pb-16 flex h-full flex-col gap-8 w-full overflow-auto">
      <div className="flex items-center gap-10">
        <ArrowIcon width={55} height={55} stroke="#2680EB" />
        <p className="text-[#2680EB] text-4xl">production</p>
      </div>
      <div className="flex flex-col gap-6">
        <Categories />
      </div>
      <div className="w-full items-center flex justify-between flex-wrap gap-6">
        <ProductList
          className="!flex-row !px-0 !py-0 flex-wrap"
          data={getCategory?.subCategories}
          dividerLine={true}
        />
        <Link to={`/products?category=${categoryQuery}`}>
          <p className="first-letter:uppercase text-[#2680EB]">view all</p>
        </Link>
      </div>
      <div className="">
        <Slider {...settings} className="static">
          {ProductsDB.map((product, index) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductsSlot;
