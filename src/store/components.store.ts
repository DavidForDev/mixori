import { create } from "zustand";

// ================ Types =================== \\
import { UseColorModeTypes } from "../types/store.type";

export const useColorMode = create<UseColorModeTypes>((set) => ({
  color: "",
  setColor: (color) => set((state) => ({ color: color })),
}));
