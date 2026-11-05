

export interface TIcon {
  code: string,
  bold: boolean,
}

export interface TLink {
  name: string,
  href: string,
  desc: string,
  link: string,
  icon?: TIcon,
  hide?: boolean,
}

export interface TWebsites {
  base: string,
  subdomains: string[],
}

export interface TConfig {
  title: string,
  author: string,
  desc: string,
  icon: string,
  links: TLink[],
  motds: string[],
  website: TWebsites,
}
