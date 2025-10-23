import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Router from "./router";
import "./assets/styles/home.css";
import "./assets/styles/effects.css";
import "./assets/styles/navbar.css";

export default function App() {
const [showLoader, setShowLoader] = useState(true);

useEffect(() => {
const timer = setTimeout(() => {
setShowLoader(false); // ✅ ici on met bien showLoader
// 🧹 Reset visuel complet du scroll et du body
document.body.style.overflow = "auto";
document.body.style.height = "auto";
window.scrollTo(0, 0);
}, 2500); // durée de ton intro
return () => clearTimeout(timer);
}, []);

return (
<>
{showLoader ? (
// ✨ Empêche tout décalage pendant le Loader
<div style={{ height: "100vh", overflow: "hidden" }}>
<Loader />
</div>
) : (
<Router />
)}
</>
);
}
