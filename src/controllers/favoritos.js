const favorito = require('../models/favorito');
const Usuario = require('../models/usuario');


module.exports = { 
    index: async (req, res, next) => {
    const favoritos = await favorito.find({});
    res.status(200).json(favoritos);

},

newFavorito: async(req, res, next) => {
    const newFavorito = new favorito(req.body);
    const favorito = await newFavorito.save();
    res.status(201).json(favorito);

},

getFavorito: async (req, res, next) => {
    const { favoritoId } = req.params;
    const favorito = await newFavorito.findById(favoritoId);
    console.log(favorito);
    res.status(200).json(favorito);

},

updateFavorito: async (req, res, next) => {
    const { favoritoId } = req.params;
    const updatedFavorito = req.body;
    const oldFavorito = await favorito.findByIdAndUpdate(favoritoId, updatedFavorito);
    res.status(200).json({success: true});
},

deleteFavorito: async(req, res, next) => {
    const { favoritoId } = req.params;
    await favorito.findOneAndDelete(favoritoId);
    res.status(200).json({success: true});
},
getFavoritoUsuario: async(req, res, next) => {
    const { favoritoId } = req.params;
    const favorito = await Favorito.findById(favoritoId).populate('Usuarios');
    res.status(200).json(favorito);
},
};