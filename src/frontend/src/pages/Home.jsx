import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css";
import logo from "../assets/logo.png";

export default function Home() {
const navigate = useNavigate();

const handleEnter = () => {
navigate("/label");
};

return (
<div className="home-container">
<img src={logo} alt="Privat Label" className="home-logo" />
<h1 className="brand-name">Privat Label®</h1>
<p className="slogan">Independent. Bold. Royal.</p>
<button className="enter-btn" onClick={handleEnter}>
Enter the Label
</button>
</div>
);
}
