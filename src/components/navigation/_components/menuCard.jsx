import { Link } from "react-router-dom";

// ================ Icons  =================== \\
import CaretArrow from "../../../assets/icons/caretArrow";

const MenuCard = ({ name, href = "", subMenu }) => {
  return (
    <div className="relative group transition-all">
      <Link to={href} className="flex items-center ">
        <li className="cursor-pointer group-hover:text-[#2680EB] text-sm first-letter:uppercase font-medium text-black transition-all duration-300">
          {name}
        </li>
        {subMenu && subMenu?.length > 0 && (
          <CaretArrow
            width={17}
            height={17}
            className="group-hover:fill-[#2680EB] transition-all duration-300 -rotate-90 md:rotate-0"
          />
        )}
      </Link>
      {subMenu && subMenu.length > 0 && (
        <div className="bg-[#F5F5F5] py-6 px-10 absolute top-6 group-hover:visible invisible transition-all ">
          <ul className="flex flex-col gap-3">
            {subMenu?.map((el, index) => (
              <Link key={index} to={el.href}>
                <li className="text-black cursor-pointer first-letter:uppercase text-nowrap text-sm hover:text-[#2680EB]">
                  {el.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
