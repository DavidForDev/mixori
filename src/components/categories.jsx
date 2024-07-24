import { useSearchParams } from "react-router-dom";

// ================ UI =================== \\
import { ActiveButton } from "./ui/buttons.ui";

// ================ Local Database =================== \\
import { mainCategory } from "../db/categories";

const Categories = () => {
  // === get Query
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:flex gap-3">
      {mainCategory.map((el, index) => {
        return (
          <ActiveButton
            key={index}
            to={{ search: `?category=${el.categoryName}` }}
            active={categoryQuery === el.categoryName}
            className="md:text-start h-full w-full"
          >
            {el.categoryName}
          </ActiveButton>
        );
      })}
    </div>
  );
};

export default Categories;
