import { useEffect, useState } from "react";

export default function Shop() {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
async function fetchProducts() {
console.log("🛍️ Chargement des produits...");
try {
const response = await fetch("/.netlify/functions/products");
if (!response.ok) throw new Error("Erreur serveur");
const data = await response.json();
setProducts(data.result || []);
} catch (err) {
console.error("❌ Erreur backend :", err.message);
setError("Impossible de charger les produits pour le moment.");
}
}

fetchProducts();
}, []);

if (error) return <p style={{ color: "red" }}>{error}</p>;

return (
<div>
<h1>🛍️ Boutique Privat Label</h1>
{products.length > 0 ? (
<ul>
{products.map((p) => (
<li key={p.id}>
<img src={p.thumbnail_url} alt={p.name} width="120" />
<p>{p.name}</p>
</li>
))}
</ul>
) : (
<p>Chargement des produits...</p>
)}
</div>
);
}
