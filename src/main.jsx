// Component Imports
import { Toaster } from 'react-hot-toast';
import App from "./App.jsx";
// CSS Imports
import "./index.css";
// Library Imports
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Redux/store.js';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>
  </Provider>
);
