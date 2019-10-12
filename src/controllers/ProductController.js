const mongoose = require('mongoose');
const Product = mongoose.model('Product')
//importo o model

//o controller e responsavel por armazer toda a logica que vai para o banco de dados

module.exports = {
    async index(req, res) {
    //funcao para listar os produtos
        const products = await Product.find();
        //funcao do bd COLLECTION.finc()

        return res.json(products)
        //para retornar o resultado em json
    },

    async store(req, res) {
        const product = await Product.create(req.body);
        //com o req.body eu pego todos os dados enviados

        return res.json(product);
    }
};
//aqui fica as funcoes do banco de dados