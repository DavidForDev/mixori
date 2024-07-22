import { Link } from "react-router-dom";

// ================ Types =================== \\
import { SocialCardTypes } from "../../../types/components.type";

const SocialCard = ({ href = "", logo }: SocialCardTypes) => {
  return (
    <Link to={href}>
      <div className="px-5 py-3 bg-[#E4EAF0] ">{logo}</div>
    </Link>
  );
};

export default SocialCard;
