// ================ Local Components =================== \\
import SocialCard from "./_components/socialCard";

// ================ Types =================== \\
import { SocialsTypes } from "../../types/components.type";

const Socials = ({ data }: SocialsTypes) => {
  return (
    <div className="flex gap-3 w-full justify-between">
      {data.map((el, index) => (
        <SocialCard key={index} href={el.href} logo={el.logo} />
      ))}
    </div>
  );
};

export default Socials;
