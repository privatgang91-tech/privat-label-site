import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // facultatif, si tu veux du style global

// Création du root React (React 18)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu principal
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);