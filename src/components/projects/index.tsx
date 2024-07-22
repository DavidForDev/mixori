import { Link } from "react-router-dom";
import { useState } from "react";

// ================ Local Components =================== \\
import ProjectCard from "./_components/projectCard";
import CaretArrow from "../../assets/icons/caretArrow";

const Projects = () => {
  const [toggleStatus, setToggleStatus] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setToggleStatus(toggleStatus === id ? null : id);
  };

  const projects = [
    { id: "1", name: "Project 1", location: "Location 1", years: "Years 1" },
    { id: "2", name: "Project 2", location: "Location 2", years: "Years 2" },
  ];

  return (
    <div className="flex flex-col gap-1">
      <div className=" flex w-full items-center justify-between">
        <div
          className={`gap-6 flex items-center justify-between text-nowrap max-w-3xl w-full text-sm`}
        >
          <span className="first-letter:uppercase ">project name</span>
          <span className="first-letter:uppercase">location</span>
          <span className="first-letter:uppercase ">years</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer text-nowrap">
          <CaretArrow
            width={13}
            height={13}
            className="-rotate-90 fill-[#2680EB]"
          />
          <p className="text-[#2680EB] text-sm">View current projects</p>
        </div>
      </div>
      {projects.map((el, index) => (
        <ProjectCard
          key={el.id}
          onClick={handleToggle}
          id={el.id}
          isOpen={el.id === toggleStatus}
        />
      ))}
    </div>
  );
};

export default Projects;
