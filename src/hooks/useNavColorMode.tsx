import { useEffect } from "react";
import { useColorMode } from "../store/components.store";

const UseNavColorMode = (color: string) => {
  // zustand
  const { setColor } = useColorMode();

  useEffect(() => {
    if (color) setColor(color);
  }, [color, setColor]);
};

export default UseNavColorMode;
