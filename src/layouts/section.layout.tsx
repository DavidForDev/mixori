// ================ Types =================== \\
import { SectionLayoutTypes } from "../types/layouts.type";

const SectionLayout = ({ className = "", children }: SectionLayoutTypes) => {
  return <section className={`${className} w-full h-fit `}>{children}</section>;
};

export default SectionLayout;
