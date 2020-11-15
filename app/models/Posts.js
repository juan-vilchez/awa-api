const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    descripcion: {
        type: String
    },
    categoria: {
        type: String
    },
    fecha: {
        type: String
    },
    comentarios: {
        autor: {
            type: String

        },
        mensaje: {
            type: String

        },
        fecha: {
            type: String

        },
    }
});

const Product = mongoose.model('posts', ProductSchema);

module.exports = Product;