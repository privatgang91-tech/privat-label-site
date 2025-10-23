import React from "react";
import Navbar from "../components/Navbar";
import "./contact.css";

export default function Contact() {
return (
<div className="contact-page">
<Navbar />
<div className="contact-container">
<h1>Contact</h1>
<p>📧 contact@privatlabel.com</p>
<p>Ou via notre équipe : vandirecords@gmail.com</p>
</div>
</div>
);
}