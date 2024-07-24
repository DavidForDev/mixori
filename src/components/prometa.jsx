const ProMeta = ({ projectName, location, years, className }) => {
  return (
    <div
      className={`${className} gap-6 flex items-center justify-between text-nowrap max-w-3xl w-full`}
    >
      <span className="first-letter:uppercase ">{projectName}</span>
      <span className="first-letter:uppercase ">{location}</span>
      <span className="first-letter:uppercase ">{years}</span>
    </div>
  );
};

export default ProMeta;
