import geistNormal from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?arraybuffer";
import geistMono from "@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2?arraybuffer";
import { ImageResponse } from "@takumi-rs/image-response/wasm";
import module from "@takumi-rs/wasm/takumi_wasm_bg.wasm";
import { Hono } from "hono";
import { OpenGraphImage } from "./components";
import { prepareResources } from "./utils";

const app = new Hono().get("/", async () => {
  // Pending data model & API
  const serverName = "Ella's Mega Chomp Project";
  const createdAt = new Date();
  const score = "A-";

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
      fonts: [geistNormal, geistMono],
      fetchedResources: await prepareResources(),
    },
  );
});

export default app;
