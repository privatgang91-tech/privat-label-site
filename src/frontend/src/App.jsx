import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Router from "./router"; // <-- met bien le "./"

export default function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
const timer = setTimeout(() => setLoading(false), 3000);
return () => clearTimeout(timer);
}, []);

return (
<>
{loading ? <Loader /> : <Router />}
</>
);
}