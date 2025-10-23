import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<h1>Bienvenue sur Privat Label 💋</h1>} />
<Route path="/shop" element={<Shop />} />
</Routes>
</BrowserRouter>
);
}

export default App;