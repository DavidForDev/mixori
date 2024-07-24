import React from "react";

// ================ Icons =================== \\
import ArrowIcon from "../assets/icons/arrow";

// ================ Layouts =================== \\
import CollectLayout from "../layouts/collect.layout";

const AboutCard = ({
  text = "",
  label = { labelText: "", labelClass: "" },
  iconClass = "",
  ...props
}) => {
  const { labelText, labelClass } = label;

  const iconPosition = props.reverse ? "rotate-90" : "";
  const textAlign = props.reverse
    ? "text-start md:!left-[100%]"
    : "text-end flex items-end flex-col";

  return (
    <CollectLayout {...props}>
      <div className="md:relative">
        <h3
          className={`${textAlign} ${labelClass} uppercase absolute md:-left-[2%] left-1/2 transform -translate-x-1/2 md:top-1/4 top-[10%] md:text-6xl text-7xl md:w-28 text-start font-bold`}
        >
          <ArrowIcon className={`${iconPosition} ${iconClass} `} />
          {labelText}
        </h3>
        <p className="md:px-20 md:py-20 px-4">{text}</p>
      </div>
    </CollectLayout>
  );
};

export default AboutCard;
