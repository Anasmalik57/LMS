// Component Imports
import { Toaster } from 'react-hot-toast';
import App from "./App.jsx";
// CSS Imports
import "./index.css";
// Library Imports
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
);
