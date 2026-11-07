import { memo, PropsWithChildren } from "hono/jsx";
import { BaseHeader } from "./header";
import { BaseFooter } from "./footer";
import { Config } from "../../config";



export const BasePreconnects = () => {

  const pc = (href: string) => <link rel="preconnect" href={href} />

  return (
    <>
      {Config.website.subdomains.map((subdomain) => pc(`https://${subdomain}.${Config.website.base}`))}
      {pc(`https://${Config.website.base}`)}
    </>

  )
}


type BaseLayout = {
  title: string;
  description: string;
}

// base layout func
// export function base_layout({ title, children }: PropsWithChildren<BaseLayout>) {
  // return (
export const BaseLayout = ({ title, description, children }: PropsWithChildren<BaseLayout>) => (
  <html lang="en">
    <head>
      <BasePreconnects />

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="https://cdn.entwisle.dev/favicon.ico" type="image/svg+xml" />
      {/*<link rel="preload" href="/styles.css" as="styles" onload="this.onload=null;this.rel='stylesheet'"/>*/}
      {/*defer loading css*/}
      {/*<link rel="stylesheet" href="styles.css" />*/}
      <link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'"/>
      <noscript><link rel="stylesheet" href="styles.css" /></noscript>

      <title>{title}</title>
      <meta name="description" content={description} />
    </head>
    <body>
      <BaseHeader {...{title, description}} />
      <main>
        {children}
      </main>
      <BaseFooter />
    </body>
  </html>
);
