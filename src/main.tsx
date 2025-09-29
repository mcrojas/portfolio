import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import AOS from 'aos';
import "./index.css";

AOS.init();

createRoot(document.getElementById("root")!).render(<App />);
