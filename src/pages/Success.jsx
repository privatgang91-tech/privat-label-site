import React from "react";
import "../pages/shop.css";

export default function Success() {
return (
<div className="payment-status success">
<h1>🎉 Paiement réussi !</h1>
<p>Merci pour ton achat 💖</p>
<a href="/shop" className="back-btn">← Retour à la boutique</a>
</div>
);
}
