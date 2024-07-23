import { TextareaHTMLAttributes } from "react";

// ================ Types =================== \\
import { InputTypes } from "../../types/components.type";

export interface TextareaTypes
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const PrimaryInput = ({
  className = "",
  icon,
  darkMode = { status: false, initialColor: "" },
  ...props
}: InputTypes) => {
  const placeholderStyle =
    darkMode.initialColor === "white"
      ? "placeholder:text-white border-white"
      : "placeholder:text-black border-black";

  return (
    <div
      className={`${className} ${placeholderStyle} w-full px-4 py-3.5 rounded-sm border border-solid  flex items-center gap-2`}
    >
      <input
        {...props}
        className={`w-full outline-none bg-transparent text-sm ${placeholderStyle}`}
      />
      {icon}
    </div>
  );
};

export const PrimaryTextarea = ({ className, ...props }: TextareaTypes) => {
  return (
    <div
      className={`${className} w-full px-4 py-2 rounded-sm border border-solid border-black flex items-start gap-2`}
    >
      <textarea
        {...props}
        className="w-full h-full max-h-48 resize-none outline-none bg-transparent placeholder:text-black text-black"
      />
    </div>
  );
};
