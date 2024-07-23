// ================ Icons =================== \\
import ArrowIcon from "../../../assets/icons/arrow";

// ================ Layouts =================== \\
import CollectLayout from "../../../layouts/collect.layout";

// ================ Types =================== \\
import { AboutCardTypes } from "../../../types/_components.type";

const AboutCard = ({
  text = "",
  label = { labelText: "", labelColor: "" },
  ...props
}: AboutCardTypes) => {
  const { labelText, labelColor } = label;

  const iconPosition = props.reverse ? "rotate-90" : "";
  const textAlign = props.reverse
    ? "text-start md:!left-[100%]"
    : "text-end flex items-end flex-col";

  return (
    <CollectLayout {...props}>
      <div className="relative">
        <h3
          style={{ color: labelColor }}
          className={`${textAlign} uppercase absolute md:-left-[2%] left-1/2 transform -translate-x-1/2 md:top-1/4 -top-[100%] md:text-6xl text-7xl md:w-28 text-start font-bold`}
        >
          <ArrowIcon stroke={labelColor} className={iconPosition} />
          {labelText}
        </h3>
        <p className="md:px-20 md:py-20 px-4">{text}</p>
      </div>
    </CollectLayout>
  );
};

export default AboutCard;
