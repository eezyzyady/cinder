const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreUsuario: String,
    email: String,
    edad: Number,
    sexo: String,
    frasePersonal: String,
    ciudad: String,
    pais: String,
    Favoritos: [{
        type: Schema.Types.ObjectId,
        ref: 'favorito'

    }],
    Rechazados: Array,



});

module.exports = mongoose.model('Usuario', usuarioSchema);
