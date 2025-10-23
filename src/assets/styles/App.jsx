import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Router from "./router";
import "./assets/styles/home.css";
import "./assets/styles/effects.css";
import "./assets/styles/navbar.css";

export default function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => setLoading(false), 2500);
return () => clearTimeout(timer);
}, []);

return (
<>
{loading ? (
<div style={{ height: "100vh", overflow: "hidden" }}>
<Loader />
</div>
) : (
<Router />
)}
</>
);
}
