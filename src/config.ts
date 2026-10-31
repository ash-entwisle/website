import { type TConfig } from "./types";

export const Config: TConfig = {
  title: "Ash Entwisle",
  about:
    "Linktree alternative for ppl who like to be lazy and use config files for everything",
  image: "/favicon.svg",
  websites: [
    {
      name: "CDN",
      href: "https://cdn.entwisle.dev",
      desc: "My CDN :3",
      link: "cdn"
    },
    {
      name: "Links",
      href: "https://links.entwisle.dev",
      desc: "My Linktree",
      link: "links"
    },
    {
      name: "Website",
      href: "https://entwisle.dev",
      desc: "My Website",
      link: "www"
    }
  ],
  links: [
    {
      name: "GitHub",
      href: "https://github.com/ash-entwisle/lazylink",
      desc: "LazyLink's GitHub repo",
      link: "github",
      icon: {
        code: "f09b",
        bold: false,
      },
    },
    {
      name: "Fork me!",
      href: "https://github.com/new?template_name=lazylink&template_owner=ash-entwisle",
      desc: "Fork me on GitHub to make your own!",
      link: "fork",
      icon: {
        code: "e13b",
        bold: true,
      },
    },
    {
      name: "More From Me",
      href: "https://ashentwisle.com",
      desc: "Check out my other stuff!",
      link: "website",
      icon: {
        code: "f0ac",
        bold: true,
      },
    },
    {
      name: "Hidden Link",
      href: "https://youtu.be/dQw4w9WgXcQ",
      desc: "This link is hidden!",
      link: "ssssh",
      hide: true,
    },
  ],
};
