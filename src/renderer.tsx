import { reactRenderer } from "@hono/react-renderer";
import { Link, ViteClient } from "vite-ssr-components/hono";

export const renderer = reactRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <ViteClient />
        <Link href="/src/style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
});
