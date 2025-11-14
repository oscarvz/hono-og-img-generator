import geistNormal from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?arraybuffer";
import { zValidator } from "@hono/zod-validator";
import { ImageResponse } from "@takumi-rs/image-response/wasm";
import module from "@takumi-rs/wasm/takumi_wasm_bg.wasm";
import { Hono } from "hono";
import { z } from "zod";
import { App, OpenGraphImage } from "./components";
import { renderer } from "./renderer";
import { prepareResources } from "./utils";

const ogSchema = z.object({
  serverName: z.string().min(1, "Server name is required"),
  createdAt: z.coerce.date().optional().default(new Date()),
  grade: z.enum(["A+", "A-", "B+", "B-", "C+", "C-"]).default("A+"),
});

const og = new Hono().post("/", zValidator("json", ogSchema), async (c) => {
  const { serverName, createdAt, grade } = c.req.valid("json");

  return new ImageResponse(
    <OpenGraphImage
      serverName={serverName}
      createdAt={createdAt}
      grade={grade}
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
});

const client = new Hono().get("/", renderer, (c) => c.render(<App />));
const app = new Hono().route("/og", og).route("/", client);

export default app;
export type OpenGraphImageProps = z.infer<typeof ogSchema>;
export type OgRoute = typeof og;
