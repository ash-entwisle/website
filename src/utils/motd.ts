import { Config } from "../../config";

export function motd(): string {
  return Config.motds[Math.floor(Math.random() * Config.motds.length)];
}
