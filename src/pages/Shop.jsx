import React from "react";
import Navbar from "../components/Navbar";
import "./shop.css";

export default function Shop() {
return (
<div className="shop-page">
<Navbar />
<div className="shop-construction">
<div className="cone">🚧</div>
<h1>Shop en construction</h1>
<p>Une collection exclusive arrive bientôt…</p>
<span className="tagline">Privat Label — Royal Drop incoming 👑</span>
</div>
</div>
);
}