import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router.jsx"; // ou ./Router.jsx selon ton nom exact

export default function App() {
return (
<BrowserRouter>
<Router />
</BrowserRouter>
);
}