// ================ Components =================== \\
import Projects from "../../components/projects";

// ================ Hooks =================== \\
import UseNavColorMode from "../../hooks/useNavColorMode";

// ================ Layouts =================== \\
import SectionLayout from "../../layouts/section.layout";

const CurrentProjectPage = () => {
  UseNavColorMode("black");

  return (
    <div className="flex flex-col h-full pt-28 gap-24 md:px-10 px-3 py-20">
      <SectionLayout>
        <Projects />
      </SectionLayout>
    </div>
  );
};

export default CurrentProjectPage;
