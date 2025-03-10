// Import todo lo de la libreria express
import express from "express";
import productRoutes from "./src/routes/products.js"

// Se crea una constante que es igual a la libreria
// que acabo de importar, y la ejecuto
const app = express();

// Middleware para que acepte datos JSON
app.use(express.json());

app.use("/api/products", productRoutes);

// Exportamos esa shi
export default app;