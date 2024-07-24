import CaretArrow from "../assets/icons/caretArrow";

const ProPath = () => {
  return (
    <div className="flex items-center gap-4 text-sm px-4 md:px-14 text-nowrap flex-wrap">
      <p>products</p>
      <CaretArrow width={18} height={18} className="-rotate-90" />
      <p>Railway constructions</p>
      <CaretArrow width={18} height={18} className="-rotate-90" />
      <p className="text-[#2680EB]">product name</p>
    </div>
  );
};

export default ProPath;
