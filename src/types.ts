

export interface TIcon {
  code: string;
  bold: boolean;
}

export interface TLink {
  name: string;
  href: string;
  desc: string;
  link: string;
  icon?: TIcon;
  hide?: boolean;
}

export interface TConfig {
  title: string;
  subtitle?: string;
  about: string;
  image?: string;
  websites?: TLink[];
  links: TLink[];
}
