import React from "react";
import "../assets/styles/artiste.css";
import Navbar from "../components/Navbar";
import acj from "../assets/ACJ.jpeg"; // à remplacer par sa photo officielle quand tu l’auras

export default function Artiste() {
return (
<div className="artiste-page">
<Navbar />
<div className="artiste-content">
<div className="artiste-visual">
<img src={acj} alt="ACJ" className="artiste-photo" />
<div className="artiste-glow"></div>
</div>

<div className="artiste-info">
<h1 className="artiste-name">ACJ</h1>
<p className="artiste-style">Zouk Love · Pop/Rap</p>
<p className="artiste-bio">[en cours de développement]</p>

<a
href="https://music.youtube.com/watch?v=cYs08Yt8pyw&si=SbeuLbaFua3yx3J7"
target="_blank"
rel="noopener noreferrer"
className="listen-btn"
>
🎧 Écouter sur YouTube Music
</a>
</div>
</div>
</div>
);
}
