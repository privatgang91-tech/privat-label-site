import React from "react";
import Navbar from "../components/Navbar";
import "./label.css";

export default function Label() {
return (
<div className="label-page">
<Navbar />

{/* ✅ CONTENEUR GLOBAL ALIGNÉ */}
<div
className="label-wrapper"
style={{
minHeight: "100vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
textAlign: "center",
padding: "4rem 2rem",
boxSizing: "border-box",
}}
>
<div className="label-content">
<h1 className="label-title">Privat Label®</h1>
<p className="label-sub">Independent. Bold. Royal.</p>

<p className="label-text">
Fondé par <strong>Keny Ken</strong>, artiste et producteur visionnaire,
<br /> <strong>Privat Label®</strong> relie musique, art et mode dans
une énergie indépendante et élégante. Aux côtés de{" "}
<strong>KLK</strong>, homme de l’ombre et designer, l’équipe développe
une identité forte et intemporelle : une fusion entre créativité brute
et esthétique raffinée.
</p>

<div className="label-buttons">
<a
href="https://www.instagram.com/privat_officiel?igsh=c3AzYWU3dHRmam0x"
target="_blank"
rel="noreferrer"
className="insta-btn"
>
🔗 Suivre sur Instagram
</a>

<a href="/shop" className="discover-btn">
Découvrir le Shop
</a>
</div>
</div>
</div>
</div>
);
}
