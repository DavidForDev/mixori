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
    ? "text-start md:!left-[85%] left-[14%]"
    : "text-end flex items-end flex-col";

  return (
    <CollectLayout {...props}>
      <div className="w-full h-full md:relative">
        <h3
          className={`${textAlign} ${labelClass} uppercase text-7xl absolute translate-y-1/3 right-1/4 md:-left-[5%] 2xl:-left-[0%] 2xl:text-[118px] top-[15%] z-40 w-28 font-bold`}
        >
          <ArrowIcon className={`${iconPosition} ${iconClass}`} />
          {labelText}
        </h3>
        <div className="md:px-20 md:py-20 px-4 2xl:max-w-[660px] max-w-[630px] flex items-center justify-center m-auto h-full">
          <p className="w-full">{text}</p>
        </div>
      </div>
    </CollectLayout>
  );
};

export default AboutCard;
