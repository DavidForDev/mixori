import { Link } from "react-router-dom";

const SocialCard = ({ href = "", logo }) => {
  return (
    <Link to={href}>
      <div className="px-5 py-3 bg-[#E4EAF0] ">{logo}</div>
    </Link>
  );
};

export default SocialCard;
