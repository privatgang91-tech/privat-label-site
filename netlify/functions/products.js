// netlify/functions/products.js
import axios from "axios";

export async function handler() {
console.log("🛍️ [Privat Label Shop] Récupération détaillée des produits...");

try {
// 🔹 Étape 1 : liste simple
const baseResponse = await axios.get("https://api.printful.com/store/products", {
headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
});

const products = baseResponse.data.result || [];
console.log(`💎 Produits trouvés : ${products.length}`);

// 🔹 Étape 2 : récupérer les détails pour chaque produit
const detailed = await Promise.all(
products.map(async (p) => {
try {
const res = await axios.get(`https://api.printful.com/store/products/${p.id}`, {
headers: { Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}` },
});

const variants = res.data?.result?.sync_variants || [];
const price = variants[0]?.retail_price || "—";

return {
id: p.id,
name: p.name,
thumbnail_url: p.thumbnail_url,
price,
};
} catch (e) {
console.warn(`⚠️ Impossible de récupérer ${p.id}:`, e.message);
return { id: p.id, name: p.name, thumbnail_url: p.thumbnail_url, price: "—" };
}
})
);

return {
statusCode: 200,
headers: {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*",
},
body: JSON.stringify({ result: detailed }),
};
} catch (error) {
console.error("❌ Erreur Printful :", error.response?.status, error.response?.data);
return {
statusCode: error.response?.status || 500,
headers: {
"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*",
},
body: JSON.stringify({
error: "Erreur lors du chargement des produits Printful",
details: error.response?.data || error.message,
}),
};
}
}
