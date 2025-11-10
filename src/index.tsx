import { Hono } from "hono";
import { ImageResponse } from "workers-og";
import { OpenGraphCard } from "./og";
import { renderer } from "./renderer";

const app = new Hono();

app.get("/", renderer, (c) => {
  return c.render(<div>Hello, world!</div>);
});

app.get("/og", () => {
  const imageResponse = new ImageResponse(<OpenGraphCard />, {
    width: 1200,
    height: 630,
  });

  return imageResponse;
});

export default app;
