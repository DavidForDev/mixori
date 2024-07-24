// ================ Local Components =================== \\
import SocialCard from "./_components/socialCard";

const Socials = ({ data }) => {
  return (
    <div className="flex gap-3 w-full justify-between">
      {data.map((el, index) => (
        <SocialCard key={index} href={el.href} logo={el.logo} />
      ))}
    </div>
  );
};

export default Socials;
