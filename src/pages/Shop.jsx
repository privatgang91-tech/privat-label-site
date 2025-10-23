import React from "react";
import Navbar from "../components/Navbar";
import "./shop.css";
import constructionLogo from "../assets/construction.png"; // 🔧 ton image logo ici

export default function Shop() {
return (
<div className="shop-page">
<Navbar />
<div className="shop-content">
<img
src={constructionLogo}
alt="Page en construction"
className="construction-img"
/>
<h1 className="shop-title">🚧 En Construction</h1>
<p className="shop-text">
La boutique <strong>Privat Label®</strong> arrive bientôt 💎<br />
Préparez-vous à découvrir notre univers mode & art underground.
</p>
<a href="/" className="back-home">
⬅️ Retour à l'accueil
</a>
</div>
</div>
);
}
