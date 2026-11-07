import { memo } from "hono/jsx"

export const HeaderLogo = () => (
  <div class="logo">
    <a href="/">
      <img src="https://cdn.entwisle.dev/favicon.svg" alt="My Logo" />
    </a>
  </div>
)

export const HeaderTitle = ({title, description}: BaseHeader)  => (
  <div class="title">
    <h1>{title ?? "Hello World, I'm Ash!"}</h1>
  </div>
);

export const HeaderLinks = () => {

  const links = [
    { href: "/", text: "\\about" },
    { href: "/blog", text: "\\blog" },
    { href: "/links", text: "\\links" },
    { href: "/rss.xml", text: "\\rss.xml" },
  ];

  const helper = (href: string, text: string) => ( <a href={href}>{text}</a> );

  return (
    <span class="links">
      { links.map((link) => helper(link.href, link.text)) }
    </span>
  );
}

type BaseHeader = {
  title?: string;
  description?: string;
}

export const BaseHeader = ({ title, description }: BaseHeader) => (
  <header>
    <div class="left">
      <HeaderLogo />
    </div>
    <div class="right">
      <HeaderTitle {...{title, description}} />
      <HeaderLinks />
    </div>
  </header>
)
