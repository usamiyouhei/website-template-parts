import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/style.scss";
import App from "./App.tsx";
import Block1 from "./components/Block1/Block1.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Block1 />
  </StrictMode>,
);
