// ==================== Types ====================== \\
import { PartnerCardTypes } from "../../../types/components.type";

const PartnerCard = ({ logo }: PartnerCardTypes) => {
  return (
    <div className="w-full p-12 cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className=" grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default PartnerCard;
