const SectionLayout = ({ className = "", children }) => {
  return <section className={`${className} w-full h-fit `}>{children}</section>;
};

export default SectionLayout;
