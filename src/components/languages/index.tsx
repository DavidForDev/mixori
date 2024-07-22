import { useEffect, useState } from "react";

// ================ Types =================== \\
import { ButtonTypes } from "../../types/components.type";

// ================ UI =================== \\
import { SwitchButton } from "../ui/buttons.ui";

// ================ Local Database =================== \\
import LanguagesDB from "../../db/language.json";

export interface LanguagesType extends ButtonTypes {}

const Languages = ({ darkMode }: LanguagesType) => {
  const [currentLan, setCurrentLan] = useState<string>("ge");

  const currentLanStorage = localStorage.getItem("lan");

  const switchHandle = (lan: string) => {
    if (!lan) return;

    localStorage.setItem("lan", lan);
    setCurrentLan(lan);
  };

  useEffect(() => {
    if (!currentLanStorage) {
      localStorage.setItem("lan", "ge");
      setCurrentLan("ge");
    } else {
      setCurrentLan(currentLanStorage);
    }
  }, [currentLanStorage]);

  return (
    <div className="flex gap-4">
      {LanguagesDB.map((el) => (
        <SwitchButton
          darkMode={darkMode}
          className="first-letter:uppercase h-full px-4"
          active={currentLan?.toLowerCase() === el.language.toLowerCase()}
          onClick={() => switchHandle(el.language)}
        >
          {el.language}
        </SwitchButton>
      ))}
    </div>
  );
};

export default Languages;
