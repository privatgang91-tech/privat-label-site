import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

export default function Navbar() {
return (
<nav className="navbar">
<div className="logo">Privat Label®</div>
<ul className="nav-links">
<li><Link to="/">Label</Link></li>
<li><Link to="/artiste">Artiste</Link></li>
<li><Link to="/shop">Shop</Link></li>
<li><Link to="/contact">Contact</Link></li>
</ul>
</nav>
);
}