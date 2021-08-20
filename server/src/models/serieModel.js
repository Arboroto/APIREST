//esto se conecta directamente a la base de datos

const mongoose = require('mongoose');
const { Schema } = mongoose;

const serieSchema = ({
    //Aqui metemos todas las variables de las que se compone las series
    titulo: {type: String, required: true},
    categorias: [{type: String, required: true}],
    capitulos: {type: Number, required: true},
    anyo: {type: Number, required: true},
    sinopsis: {type: String, required: true},
    puntuaciones: [{
        puntuacion: {type: Number, default: null},
        email: {type: String, default: null}
    }],
    imagenes: [{type: String, required: true}]
});

module.exports = mongoose.model('Serie', serieSchema, 'SeriesDBCollectionName');
