import React from "react";
import "../assets/styles/loader.css";
import crown from "../assets/logo.png"; // ton logo de couronne en blanc (fond transparent)

export default function Loader() {
return (
<div className="loader-container">
<img src={crown} alt="Privat Label Crown" className="loader-logo" />
<h1 className="loader-text">PRIVAT LABEL®</h1>
</div>
);
}