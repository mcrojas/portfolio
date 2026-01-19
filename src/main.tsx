import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AOS from 'aos';
import "./index.css";
import "./i18n";

AOS.init();

createRoot(document.getElementById("root")!).render(<App />);
