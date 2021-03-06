const mongoose = require('mongoose');
//import ORM

const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        //tipo
        required: true,
        //é obrigatorio
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // vai se auto preencher com o date.now
    }
});
//Aqui é definido quais sao os campos e quais tipos meu product vai ter

ProductSchema.plugin(mongoosePaginate);
//para usar paginacao

mongoose.model('Product', ProductSchema);
//nome do modulo(collection), de onde vem