const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//starting app
const app = express();

app.use(express.json());
//para interpretar todos dados json

//starting bd
mongoose.connect('mongodb://localhost:27017/api', { useNewUrlParser: true });

// to import model (ou seja uma collection)
requireDir('./src/models/');


app.use('/', require("./src/routes"));
//todas requisicoes a partir dessa rota, sera mandado para o routes


app.listen(3131, () => {
    console.log('running..');
});