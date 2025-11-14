import geistNormal from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?arraybuffer";
import { ImageResponse } from "@takumi-rs/image-response/wasm";
import module from "@takumi-rs/wasm/takumi_wasm_bg.wasm";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { App, OpenGraphImage } from "./components";
import { renderer } from "./renderer";
import { prepareResources } from "./utils";

const app = new Hono()
  .get("/og", cors(), async () => {
    // Pending data model & API
    const serverName = "Ella's Mega Chomp Project";
    const createdAt = new Date();
    const score = "A+";

    return new ImageResponse(
      <OpenGraphImage
        serverName={serverName}
        createdAt={createdAt}
        score={score}
      />,
      {
        module,
        width: 1200,
        height: 630,
        format: "webp",
        fonts: [geistNormal],
        fetchedResources: await prepareResources(),
      },
    );
  })
  .get("/", renderer, (c) => c.render(<App />));

export default app;
