import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Artiste from "./pages/Artiste.jsx";
import Label from "./pages/Label.jsx";
import Shop from "./pages/Shop.jsx";
import Success from "./pages/Success.jsx";
import Cancel from "./pages/Cancel.jsx";

export default function Router() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/artiste" element={<Artiste />} />
<Route path="/label" element={<Label />} />
<Route path="/shop" element={<Shop />} />
<Route path="/success" element={<Success />} />
<Route path="/cancel" element={<Cancel />} />
</Routes>
);
}