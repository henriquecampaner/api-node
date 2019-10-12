const express = require('express');
const routes = express.Router();
//crio o routes com a instacia do express para definir rotas

const ProductController = require("./controllers/ProductController")
//importo o controller

//first route
routes.get("/products", ProductController.index);
// defino a rota, e invoco a funcao para aquela rota
// ou seja, toda vez que acessar aquela rota, vai executar a funcao

routes.post("/products", ProductController.store);
//metodo post para criar

module.exports = routes;