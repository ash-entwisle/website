import { memo } from "hono/jsx";
import { Config } from "../../config";
import { get_motd } from "../utils/motd";

export const FooterLinks = () => (
  <span class="links">
    <a href="https://links.entwisle.dev">linktree</a>
    <a href="https://entwisle.dev/rss.xml">rss.xml</a>
  </span>
)

export const FooterCopyright = () => (
  <span class="copyright">
    <a href="https://entwisle.dev">Ash Entwisle</a> &copy; 2022- {new Date().getFullYear()};
  </span>
)

export const FooterMOTD = async () => (
  <div class="motd">
    <span>{await get_motd()}</span>

  </div>
)

export const BaseFooter = () => (
  <footer>
    <div class="top">
      <FooterLinks />
      <FooterCopyright />
    </div>
    <div class="bottom">
      <FooterMOTD />
    </div>
  </footer>
)
