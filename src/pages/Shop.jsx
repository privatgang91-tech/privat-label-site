import React, { useEffect, useState } from "react";
import axios from "axios";

function Shop() {
const [products, setProducts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
const fetchProducts = async () => {
console.log("🛍️ Chargement des produits Printful...");
try {
const res = await axios.get("/.netlify/functions/products");
setProducts(res.data);
} catch (err) {
console.error("❌ Erreur backend :", err.message);
setError("Impossible de charger les produits.");
}
};
fetchProducts();
}, []);

return (
<div style={{ padding: "2rem" }}>
<h1>🧢 Boutique Privat Label</h1>
{error ? (
<p style={{ color: "red" }}>{error}</p>
) : products.length > 0 ? (
<div style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
gap: "2rem",
marginTop: "2rem"
}}>
{products.map((p) => (
<div
key={p.id}
style={{
background: "rgba(255,255,255,0.05)",
borderRadius: "12px",
padding: "1.5rem",
boxShadow: "0 0 10px rgba(255, 105, 180, 0.3)",
transition: "transform 0.3s ease, box-shadow 0.3s ease",
}}
onMouseEnter={(e) => {
e.currentTarget.style.transform = "translateY(-5px)";
e.currentTarget.style.boxShadow =
"0 0 20px rgba(255, 105, 180, 0.6)";
}}
onMouseLeave={(e) => {
e.currentTarget.style.transform = "translateY(0)";
e.currentTarget.style.boxShadow =
"0 0 10px rgba(255, 105, 180, 0.3)";
}}
>
<img
src={p.thumbnail}
alt={p.name}
style={{ width: "100%", borderRadius: "8px" }}
/>
<h3 style={{ marginTop: "1rem" }}>{p.name}</h3>
<p style={{ color: "#ff99ff" }}>{p.price}</p>
</div>
))}
</div>
) : (
<p className="loading">Chargement des produits Printful...</p>
)}
</div>
);
}

export default Shop;
