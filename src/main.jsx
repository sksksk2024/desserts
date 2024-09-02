import React from "react";
import ReactDOM from "react-dom/client"; // DOM, not Dom
import App from "./App.jsx"
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
