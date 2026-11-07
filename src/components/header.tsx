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

export const HeaderLinks = () => (
  <div class="links">
    <a href="/">\about</a>
    <a href="/blog">\blog</a>
    <a href="/links">\links</a>
  </div>
);

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
