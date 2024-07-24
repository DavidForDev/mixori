import React from "react";

// ================ Local Components =================== \\
import PartnerCard from "./partnerCard";

const Partners = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 w-full">
      {data.map((el, index) => (
        <PartnerCard key={index} name={el.name} logo={el.logo} />
      ))}
    </div>
  );
};

export default Partners;
