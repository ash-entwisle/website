import { memo } from "hono/jsx";
import { Config } from "../../config";
import { get_motd } from "../utils/motd";
import { HeaderLinks } from "./header";

export const FooterLinks = () => (
  <HeaderLinks />
)

export const FooterCopyright = () => (
  <span class="copyright">
    <a href="https://entwisle.dev">Ash Entwisle</a> <span>&copy; 2022-{new Date().getFullYear()}</span>
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
