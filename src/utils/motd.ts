import { Config } from "../config";

export async function get_motd(): Promise<string> {
  try {
    const response = await fetch(`https://api.${Config.website.base}/motd`);
    if (!response.ok) { return "404: MOTD not found"; }
    return response.text();
  } catch (error) {
    return "503: MOTD service unavailable";
  }
}

export function motd(): string {
  return Config.motds[Math.floor(Math.random() * Config.motds.length)];
}
