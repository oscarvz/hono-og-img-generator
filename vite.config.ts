import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import arraybuffer from "vite-plugin-arraybuffer";
import ssrPlugin from "vite-ssr-components/plugin";

export default defineConfig({
  plugins: [cloudflare(), ssrPlugin(), arraybuffer(), tailwindcss()],
});
