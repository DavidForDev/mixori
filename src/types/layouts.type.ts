import { ReactNode } from "react";

// ==================== Collect
export interface CollectLayoutTypes {
  children?: ReactNode;
  banner?: {
    image?: string;
    bgColor?: string;
    className?: string;
  };
  reverse?: boolean;
  className?: string;
}

// ==================== Sections
export interface SectionLayoutTypes {
  className?: string;
  children: ReactNode;
}

// ==================== Sliders
export interface SliderLayoutTypes {
  slideData: string[];
  autoSliderDelay?: number;
}
