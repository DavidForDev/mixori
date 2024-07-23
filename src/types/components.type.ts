import { HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { To } from "react-router-dom";

// ==================== Banner
export interface BannerType {
  image?: string;
  className?: string;
}

// ==================== Contact Form
export interface ContactFormType {
  className?: string;
}

// ==================== Navigations
export interface MenuCardTypes {
  name: string;
  href?: string;
  subMenu?: {
    name: string;
    href: string;
  }[];
  onCloseMenu?: () => void;
}

export interface SearchContainerTypes {
  openStatus?: boolean;
  onClose?: () => void;
  searchValue?: string;
}

// ==================== News
export interface NewsCardTypes {
  id?: string;
  title?: string;
  subDescription?: string;
  image?: string;
  year?: string | number;
}
export interface NewsTypes {
  data: NewsCardTypes[];
}

// ==================== Partners

export interface PartnerCardTypes {
  name: string;
  logo: string;
}

export interface PartnersTypes {
  data: PartnerCardTypes[];
}

// ==================== Products
export interface ProductListType {
  data?: {
    title: string;
  }[];
  className?: string;
  category?: string;
  dividerLine?: boolean;
}

export interface ProductCardTypes {
  data: {
    id: string;
    title: string;
    banner: string;
    images: string[];
    description: string;
    category: string;
    contact: {
      number: string;
    };
    page: number;
  };
  className?: string;
}

export interface ProductsTypes {
  position?: "horizontal" | "vertical";
  className?: string;
  data?: ProductCardTypes["data"][];
}

// ==================== projects

export interface ProMetaTypes {
  projectName: string;
  location: string;
  years: string;
  className?: string;
}

// ==================== Socials

export interface SocialCardTypes {
  href?: string;
  logo?: ReactNode | string;
}

export interface SocialsTypes {
  data: SocialCardTypes[];
}

// ==================== UI Buttons

export interface ButtonTypes extends HtmlHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  active?: boolean;
  darkMode?: {
    status: boolean;
    initialColor: string;
  };
  to?: To;
}

// ==================== UI Inputs

export interface InputTypes extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  darkMode?: {
    status: boolean;
    initialColor: string;
  };
}
