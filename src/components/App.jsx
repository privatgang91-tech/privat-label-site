import React from "react";
import "./loader.css";
import logo from "../assets/logo-privat.png"; // ⚠️ vérifie ton chemin

export default function Loader() {
return (
<div className="loader-screen">
<div className="liquid-bg"></div> {/* 💧 effet d’encre dorée mouvante */}
<img src={logo} alt="Privat Label" className="loader-logo-img" />
</div>
);
}