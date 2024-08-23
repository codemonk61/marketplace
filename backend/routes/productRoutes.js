const express = require('express')
const {
    getAllProducts,
    getProductById
 } = require("../Controller/controller")
const routes = express.Router();

routes.get("/", getAllProducts)


routes.get("/:id",getProductById)

module.exports = routes