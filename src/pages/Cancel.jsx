import React from "react";
import "../pages/shop.css";

export default function Cancel() {
return (
<div className="payment-status cancel">
<h1>❌ Paiement annulé</h1>
<p>Pas grave ! Tu peux réessayer quand tu veux 💋</p>
<a href="/shop" className="back-btn">← Retour à la boutique</a>
</div>
);
}