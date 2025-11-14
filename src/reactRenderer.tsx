import type { Context, MiddlewareHandler } from "hono";
import type { ReactElement } from "react";
import { renderToReadableStream } from "react-dom/server.edge";

export const renderer: MiddlewareHandler = async (c: Context, next) => {
  c.setRenderer(async (children: ReactElement) => {
    const stream = await renderToReadableStream(children);

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
