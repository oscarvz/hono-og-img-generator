import { hydrateRoot } from "react-dom/client";
import { App } from "./components";

const root = document.body;
hydrateRoot(
  root,
  <body>
    <App />
  </body>,
);
