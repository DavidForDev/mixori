import { useState } from "react";

// ================ Icons =================== \\
import ArrowIcon from "../../../assets/icons/arrow";

// ================ Local Components =================== \\
import ProMeta from "./prometa";

export interface ProjectCardTypes {
  id: string;
  isOpen: boolean;
  onClick: (id: string) => void;
  data: {
    id: string;
    name: string;
    location: string;
    years: string;
  };
}

const ProjectCard = ({ id, isOpen, onClick, data }: ProjectCardTypes) => {
  const toggleStyle = isOpen ? "max-h-[900px] py-5 " : "max-h-0 py-0";

  return (
    <div className="py-3 cursor-pointer" onClick={() => onClick(id)}>
      <div className="flex items-center justify-between border-t border-solid border-black/50 pt-4">
        <ProMeta
          projectName={data.name}
          location={data.location}
          years={data.years}
          className={`${isOpen ? "text-[#2680EB]" : ""}`}
        />
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
        className={`transition-max-height duration-500 overflow-hidden w-full ${toggleStyle}`}
      >
        <div className="flex gap-6 mt-4 w-full">
          <img src="/images/service-1.png" alt="project1" className="w-1/4" />
          <p className="w-1/4">
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
          <img src="/images/service-1.png" alt="project3" className="w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
