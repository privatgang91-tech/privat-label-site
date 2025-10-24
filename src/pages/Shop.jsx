// src/pages/Shop.jsx
import { useEffect, useState } from "react";
import "./shop.css";

export default function Shop() {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function fetchProducts() {
try {
console.log("🛍️ Chargement des produits depuis Netlify...");
const response = await fetch("/.netlify/functions/products");
if (!response.ok) throw new Error("Erreur serveur");

const data = await response.json();
console.log("💎 Données reçues :", data);

// 🧩 Correction ici : on vérifie le format exact
let items = [];
if (Array.isArray(data)) {
items = data;
} else if (Array.isArray(data.result)) {
items = data.result;
} else if (Array.isArray(data.data?.result)) {
items = data.data.result;
} else {
console.warn("⚠️ Format inattendu des données :", data);
}

// 🪄 On extrait le bon prix Printful
const formatted = items.map((item) => {
const retail =
item.price ||
item.sync_variants?.[0]?.retail_price ||
item.sync_variants?.[0]?.variant_retail_price ||
"prix sur demande 🔥";
return {
id: item.id,
name: item.name,
thumbnail_url: item.thumbnail_url,
price: retail,
};
});

setProducts(formatted);
} catch (err) {
console.error("❌ Erreur :", err.message);
setError("Impossible de charger les produits pour le moment.");
} finally {
setLoading(false);
}
}

fetchProducts();
}, []);

if (error) return <p className="error-message">{error}</p>;

return (
<div className="shop-container">
<h1 className="shop-title">💎 Boutique Privat Label</h1>
<h3 className="shop-subtitle">Luxury • Street • Glow</h3>

{loading ? (
<p className="loading-text">Chargement des produits...</p>
) : products.length > 0 ? (
<div className="shop-grid">
{products.map((p) => (
<div key={p.id} className="shop-card">
<div className="shop-image-wrapper">
<img
src={p.thumbnail_url}
alt={p.name}
className="shop-image"
/>
</div>
<p className="shop-name">{p.name}</p>
<p className="shop-price">{p.price} €</p>
<button className="buy-button">Voir le produit</button>
</div>
))}
</div>
) : (
<p className="loading-text">Aucun produit disponible.</p>
)}
</div>
);
}
