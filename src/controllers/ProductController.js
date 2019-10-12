const mongoose = require('mongoose');
const Product = mongoose.model('Product')
//importo o model

//o controller e responsavel por armazer toda a logica que vai para o banco de dados

module.exports = {
    // async index(req, res) {
    // //funcao para listar os produtos
    //     const products = await Product.find();
    //     //funcao do bd COLLECTION.finc()

    //     return res.json(products)
    //     //para retornar o resultado em json
    // },

    async index(req, res) {
        //funcao para listar os produtos
        const {page = 1} = req.query;
        //para eu conseguir mudar de pagina
        //req.query pega o ?page=numero 
        const products = await Product.paginate({}, {page, limit: 10});
        //paginete para listar paginas
        //1p- instrucoes where,
        //2p-pagina atual / limit: limite por pagina

        return res.json(products)
        //para retornar o resultado em json
        },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        //requiscao PARAMETROS que estao na url, :id
        //assim eu obtenho o id que e passado na url
        return res.json(product)
    },
    //funcao para mostrar um unico item

    async store(req, res) {
        const product = await Product.create(req.body);
        //com o req.body eu pego todos os dados enviados

        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        //findByIdAndUpdate funcao para pegar o id e atualizar
        //1p- parametro pego na url
        //2p-dados que vao pelo body
        //3p- atualiza o objeto

        return res.json(product);
    },

    async delete(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        //findByIdAndRemove funcao para pegar o id e deletar
        //nao preciso criar constante
        //req.params.id- parametro pego na url

        return res.send('File deleted');
    },
};
//aqui fica as funcoes do banco de dados