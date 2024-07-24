const PartnerCard = ({ logo }) => {
  return (
    <div className="w-full p-12 cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="scale-150 md:scale-100 grayscale hover:grayscale-0 transition-all duration-300"
      />
    </div>
  );
};

export default PartnerCard;
