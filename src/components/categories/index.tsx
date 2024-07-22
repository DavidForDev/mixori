import { useSearchParams } from "react-router-dom";

// ================ UI =================== \\
import { ActiveButton } from "../ui/buttons.ui";

// ================ Local Database =================== \\
import cateBase from "../../db/categories.json";

const Categories = () => {
  // === get Query
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get("category");

  return (
    <div className="flex gap-6 flex-wrap">
      {cateBase.map((el, index) => {
        return (
          <ActiveButton
            key={index}
            to={{ search: `?category=${el.categoryName}` }}
            active={categoryQuery === el.categoryName}
          >
            {el.categoryName}
          </ActiveButton>
        );
      })}
    </div>
  );
};

export default Categories;
