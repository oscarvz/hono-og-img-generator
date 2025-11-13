import geist from "@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff2?arraybuffer";
import { ImageResponse } from "@takumi-rs/image-response/wasm";
import module from "@takumi-rs/wasm/takumi_wasm_bg.wasm";
import { Hono } from "hono";

const app = new Hono().get(
  "/",
  async () =>
    new ImageResponse(<Hello />, {
      module,
      width: 1200,
      height: 630,
      format: "webp",
      fonts: [geist],
    }),
);

function Hello() {
  return (
    <div tw="bg-black w-full h-full">
      <h1 tw="text-4xl text-white font-mono">Hello</h1>
    </div>
  );
}

export default app;
