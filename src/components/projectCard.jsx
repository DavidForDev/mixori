import React from "react";
import { useState } from "react";

// ================ Icons =================== \\
import ArrowIcon from "../assets/icons/arrow";

const ProjectCard = ({ id, isOpen, onClick, data }) => {
  const toggleStyle = isOpen ? "max-h-[900px] py-5 " : "max-h-0 py-0";

  return (
    <div className="py-3 cursor-pointer" onClick={() => onClick(id)}>
      <div className="flex items-center justify-between border-t border-solid border-black/50 pt-4">
        <div
          className={`${
            isOpen ? "text-[#2680EB]" : ""
          } gap-6 flex items-center justify-between text-nowrap max-w-3xl w-full`}
        >
          <span className="first-letter:uppercase ">{data.name}</span>
          <span className="first-letter:uppercase hidden md:block">
            {data.location}
          </span>
          <span className="first-letter:uppercase hidden md:block">
            {data.years}
          </span>
        </div>
        <ArrowIcon
          width={18}
          height={18}
          stroke={isOpen ? "#2680EB" : "black"}
          className={`${
            isOpen ? "-rotate-90" : ""
          } transition-all duration-300`}
        />
      </div>
      <div
        className={`transition-max-height duration-500 overflow-auto invisible-scroll w-full flex-col flex gap-4 ${toggleStyle}`}
      >
        <div className="flex gap-6 mt-4 w-fit max-h-60 md:max-h-full">
          <img
            src="/images/service-1.png"
            alt="project1"
            className="w-full md:w-1/4 max-h-60 md:max-h-full"
          />
          <p className="md:w-1/4 w-[600px] overflow-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <img
            src="/images/service-1.png"
            alt="project3"
            className="w-full md:w-1/4 max-h-60 md:max-h-full"
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "text-[#2680EB]" : "hidden"
        } gap-6 flex md:hidden items-center justify-between text-nowrap max-w-3xl w-full`}
      >
        <span className="first-letter:uppercase">{data.location}</span>
        <span className="first-letter:uppercase ">{data.years}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
