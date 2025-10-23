import React from "react";
import Navbar from "../components/Navbar";
import "./artiste.css";
import acjPhoto from "../assets/ACJ.jpeg"; // 🌸 portrait doux d’ACJ

export default function Artiste() {
return (
<div className="artiste-page">
<Navbar />

<div className="artiste-hero">
{/* portrait transparent flottant */}
<img src={acjPhoto} alt="ACJ" className="artist-bg-portrait" />

<h1 className="acj-title">A.C.J</h1>
<p className="artist-sub">Royal • Poetic douce • paix</p>
</div>

<div className="artist-bio">
<p>
Figure emblématique de <strong>Privat Label®</strong>, ACJ
<br />
c’est la douceur du RnB mêlée à la sincérité
d’une âme sensible.
<br />
Elle chante l’amour, la force et la vulnérabilité avec une énergie
bleue et rosée, à la fois rêveuse et affirmée.
</p>

<a
href="https://music.youtube.com/watch?v=cYs08Yt8pyw&si=V5Q1BJLqMITW_jj-"
target="_blank"
rel="noreferrer"
className="artist-btn"
>
🎧 Écouter ACJ sur Youtube
</a>
</div>
</div>
);
}
