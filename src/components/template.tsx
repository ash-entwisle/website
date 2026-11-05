// import { Config } from "../../config";
// import { Fragment } from "hono/jsx";
//
// export const preconnect = () => (
//   <>
//     {Config.website.subdomains.map((link) => (
//       <link rel="preconnect" href={link} />
//     ))}
//
//     <link rel="preconnect" href={Config.website.base} />
//   </>
// );

// export const preconnect = () => (
//     <Fragment>
//       {Config.website.subdomains.map((link) => (
//         <link rel="preconnect" href={link} />
//       ))}
//
//       <link rel="preconnect" href={Config.website.base} />
//     </Fragment>
//   );
// }
//
//
//
// interface BaseTemplateProps {
//   content: string;
//   title?: string;
//   desc?: string;
//   keywords?: string;
// }
//
// export function BaseTemplate({
//   content,
//   title = Config.title,
//   desc = Config.desc,
//   keywords = Array.from(
//     new Set(
//       (Config.title + " " + Config.desc + " " + Config.author)
//         .split(" ")
//         .filter(Boolean)
//     )
//   ).join(", "),
// }: BaseTemplateProps) {
//   return (
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <title>{title}</title>
//
//         <meta name="description" content={desc} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={Config.author} />
//
//         <meta charset="UTF-8" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1.0"
//         />
//         <meta name="robots" content="index, follow" />
//         <meta name="theme-color" content="#000000" />
//         <meta name="generator" content="Hono" />
//
//         <link rel="manifest" href="/manifest.json" />
//         <link rel="apple-touch-icon" href="/favicon.ico" />
//         <link rel="icon" href="/favicon.ico" />
//
//         <link
//           rel="sitemap"
//           type="application/xml"
//           title="Sitemap"
//           href="/sitemap.xml"
//         />
//
//         <Preconnect />
//       </head>
//
//       <body>
//         <header />
//
//         <main>{content}</main>
//
//         <footer />
//       </body>
//     </html>
//   );
// }
