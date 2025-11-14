import type { Context, MiddlewareHandler } from "hono";
import type { PropsWithChildren, ReactElement } from "react";
import { renderToReadableStream } from "react-dom/server.edge";
import { Script, ViteClient } from "vite-ssr-components/react";

function Document({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Open Graph Image</title>
        <Script src="/src/client.tsx" />
        <ViteClient />
      </head>
      <body>{children}</body>
    </html>
  );
}

export const renderer: MiddlewareHandler = async (c: Context, next) => {
  c.setRenderer(async (children: ReactElement) => {
    const stream = await renderToReadableStream(
      <Document>{children}</Document>,
    );

    c.header("Transfer-Encoding", "chunked");
    c.header("Content-Type", "text/html; charset=UTF-8");

    return c.body(stream);
  });

  return next();
};

declare module "hono" {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType: type breaks
    (
      children: React.ReactElement,
      props?: unknown,
    ): Response | Promise<Response>;
  }
}
