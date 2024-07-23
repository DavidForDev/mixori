import { Link } from "react-router-dom";

// ================ Types =================== \\
import { ButtonTypes } from "../../types/components.type";

export const PrimaryButton = ({
  children,
  className = "",
  to = "",
  ...props
}: ButtonTypes) => {
  return (
    <Link to={to}>
      <button
        {...props}
        className={`${className} w-fit rounded-sm text-white transition-alll duration-300 hover:bg-[#2680EB] bg-black text-center px-12 py-4 first-letter:uppercase`}
      >
        {children}
      </button>
    </Link>
  );
};

export const ActiveButton = ({
  children,
  className = "",
  active,
  to = "",
  ...props
}: ButtonTypes) => {
  const activeStyle = active
    ? "!bg-[#2680EB] !border-[#2680EB] !text-white"
    : "";

  return (
    <Link to={to}>
      <button
        {...props}
        className={`${className} ${activeStyle} rounded-sm text-black border border-solid border-black hover:border-[#2680EB]/60 hover:text-[#2680EB] bg-transparent text-center px-5 py-2 first-letter:uppercase`}
      >
        {children}
      </button>
    </Link>
  );
};

export const SwitchButton = ({
  children,
  className = "",
  darkMode = { status: false, initialColor: "" },
  active,
  to = "",
  ...props
}: ButtonTypes) => {
  const darkStyle =
    darkMode.initialColor === "white"
      ? "border-white text-white hover:text-white"
      : `border-black text-black hover:text-white`;

  const activeStyle = active
    ? "!bg-[#2680EB] !border-[#2680EB] text-white hover:text-white"
    : "";

  return (
    <Link to={to}>
      <button
        {...props}
        className={`${className} flex items-center justify-center h-full ${darkStyle} ${activeStyle} duration-300 transition-all rounded-md border border-solid hover:bg-[#2680EB] hover:border-[#2680EB] bg-transparent text-center p-3 first-letter:uppercase text-sm`}
      >
        {children}
      </button>
    </Link>
  );
};
