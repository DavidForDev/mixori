import React from "react";
import { Link } from "react-router-dom";

const PartnerCard = ({ logo }) => {
  return (
    <Link className="w-full">
      <div className="w-full p-12 cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="scale-150 md:scale-100 grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    </Link>
  );
};

export default PartnerCard;
