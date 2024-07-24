import React, { useState } from "react";
import CaretArrow from "../../assets/icons/caretArrow";

const DropDown = ({ className = "" }) => {
  const [dropStatus, setDropStatus] = useState(false);
  const [choseList, setChoseList] = useState("sort by");

  const activeStyle = dropStatus
    ? "!bg-[#2680EB] !text-white !border-[#2680EB]"
    : "";

  const chooseHandle = (value) => {
    if (value === choseList) {
      setChoseList("sort by");
    } else {
      setChoseList(value);
    }
    setDropStatus(false);
  };

  const filterType = ["name", "type", "date"];

  return (
    <div className={`${className} relative w-full md:w-fit`}>
      <div
        onClick={() => setDropStatus(!dropStatus)}
        className={`${activeStyle} w-full cursor-pointer rounded-sm flex justify-center items-center px-5 py-2 gap-5 group border border-solid border-black hover:border-[#2680EB]  hover:bg-[#2680EB] transition-all duration-300`}
      >
        <p className="group-hover:text-white duration-300">{choseList}</p>
        <CaretArrow
          width={15}
          height={15}
          className={`${
            dropStatus ? "fill-white rotate-180" : ""
          } group-hover:fill-white duration-300`}
        />
      </div>
      <div
        className={`${
          dropStatus ? "visible" : "invisible"
        } transition-all duration-300 overflow-auto top-14 px-4 py-2 bg-[#F5F5F5] absolute w-full flex flex-col gap-3 z-40`}
      >
        {filterType.map((el) => (
          <li
            className="first-letter:uppercase list-none cursor-pointer"
            onClick={() => chooseHandle(el)}
          >
            {el}
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
