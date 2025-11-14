import { hydrateRoot } from "react-dom/client";
import { App } from "./components";
// Results in flashing styles in dev mode
import "./style.css";

hydrateRoot(document, <App />);
