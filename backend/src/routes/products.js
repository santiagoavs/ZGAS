/* 
Este archivo sirve para definir
que métodos del CRUD va a tener mi ruta
(/api/products)
*/

import express from "express";

import productsController from "../controllers/productsController.js";

const router = express.Router();

router.route("/")
    .get(productsController.getProducts)
    .post(productsController.insertProducts)

router.route("/:id")
    .put(productsController.updateProducts)
    .delete(productsController.deleteProducts)

export default router;