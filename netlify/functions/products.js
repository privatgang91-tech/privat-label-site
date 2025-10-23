import fetch from "node-fetch";

export const handler = async () => {
try {
const response = await fetch("https://api.printful.com/store/products", {
headers: {
Authorization: `Bearer ${process.env.PRINTFUL_API_KEY}`,
},
});

if (!response.ok) {
throw new Error(`Erreur Printful: ${response.statusText}`);
}

const data = await response.json();

// On simplifie le résultat pour le front
const products = data.result.map((item) => ({
id: item.id,
name: item.name,
thumbnail: item.thumbnail_url,
price: item.retail_price || "Prix à venir",
}));

return {
statusCode: 200,
body: JSON.stringify(products),
headers: {
"Access-Control-Allow-Origin": "*",
},
};
} catch (err) {
console.error("❌ Erreur Printful :", err.message);
return {
statusCode: 500,
body: JSON.stringify({ error: "Impossible de charger les produits Printful" }),
headers: {
"Access-Control-Allow-Origin": "*",
},
};
}
};
