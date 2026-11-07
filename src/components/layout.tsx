import { memo, PropsWithChildren } from "hono/jsx";
import { BaseHeader } from "./header";
import { BaseFooter } from "./footer";
import { Config } from "../config";
import { raw } from "hono/html";
import { css, Style } from "hono/css";

export const BasePreconnects = () => {
  const pc = (href: string) => <link rel="preconnect" href={href} />;

  return (
    <>
      {Config.website.subdomains.map((subdomain: string) =>
        pc(`https://${subdomain}.${Config.website.base}`),
      )}
      {pc(`https://${Config.website.base}`)}
    </>
  );
};

type BaseLayout = {
  title: string;
  description: string;
};

export const BaseLayout = ({
  title,
  description,
  children,
}: PropsWithChildren<BaseLayout>) => (
  <>
    {raw("<!DOCTYPE html>")}
    <html lang="en">
      <head>
        <BasePreconnects />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://cdn.entwisle.dev/favicon.ico"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="styles.css"
          as="style"
          onload="this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="styles.css" />
        </noscript>
        <link rel="stylesheet" href="styles.css"/>

        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body>
        <BaseHeader {...{ title, description }} />
        <main>{children}</main>
        <BaseFooter />
      </body>
    </html>
    <Style>
      {css`
        :root {

          min-height: 100vh;
          min-height: 100vh;
          margin: 0;

          display: flex;
          justify-content: center;

          color:  hsl(220, 11%, 71%);
          background-color:  hsl(219, 13%, 18%);


          body {
            display: flex;
            flex-direction: column;

            margin: 0;

            width: min(100% - 2rem, 600px);
            min-width: 300px;

            header {
              display: flex;
              flex-direction: row;
              height: 150px;

              margin-top: 15px;
              margin-bottom: 15px;

              overflow: hidden;
            }

            main {
              display: flex;
              flex-direction: column;

              margin-top: 15px;
              margin-bottom: 15px;

              min-height: 60vh;
            }

            footer {
              margin-top: 15px;

              a {
                margin-right: 10px;
              }

              .top {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                margin-bottom: 15px;

                .links {
                  display: flex;
                  flex-wrap: wrap;
                }

                .copyright {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: wrap;
                  justify-content: flex-end;

                  span {
                    display: flex;
                    flex-wrap: nowrap;
                  }
                }
              }

              .bottom {
                display: flex;
                justify-content: center;
                text-align: center;
              }
            }
          }
        }
      `}
    </Style>
  </>
);
