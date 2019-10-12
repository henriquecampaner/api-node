const express = require('express');
const routes = express.Router();
//crio o routes com a instacia do express para definir rotas

const ProductController = require("./controllers/ProductController")
//importo o controller

//first route
routes.get("/products", ProductController.index);
// defino a rota, e invoco a funcao para aquela rota
// ou seja, toda vez que acessar aquela rota, vai executar a funcao

routes.get("/products/:id", ProductController.show);
//:id para parametros variaveis

routes.post("/products", ProductController.store);
//metodo post para criar

routes.put("/products/:id", ProductController.update);
//metodo put para atualizar

routes.delete("/products/:id", ProductController.delete);
//metodo put para atualizar

module.exports = routes;