// Importo el archivo app.js
import app from "./app.js";

import "./database.js";

import { config } from "./src/config.js";

// Creo una funciòn que ejecuta el servidor
async function main() {
    app.listen(config.PORT);
    console.log("Server running");
}

// Ejecutar la función
main();