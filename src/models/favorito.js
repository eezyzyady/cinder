const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritoSchema = new Schema ({
    _Id: String,
    Usuarios: [{
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }],



});

module.exports = mongoose.model('favorito', favoritoSchema);
