const Usuario = require('../models/usuario');
const favorito = require('../models/favorito');


module.exports = { 
    index: async (req, res, next) => {
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);
},
newUsuario: async(req,res, next) =>{
    const newUsuario = new Usuario(req.body);
    const usuario = await newUsuario.save();
    res.status(201).json(usuario);
},
getUsuario: async(req, res, next) => {
    const { usuarioId } = req.params;
    const usuario = await Usuario.findById(usuarioId);
    res.status(200).json(usuario);
},
updateUsuario: async(req, res, next) => {
    const { usuarioId } = req.params;
    const newUsuario = req.body;
    const oldUsuario = await Usuario.findByIdAndUpdate(usuarioId, newUsuario);
    res.status(200).json({success: true});

},
deleteUsuario:  async(req, res, next) => {
    const { usuarioId } = req.params;
    await Usuario.findOneAndDelete(usuarioId);
    res.status(200).json({success: true});

},
getUsuarioFavoritos: async(req, res, next) => {
    const { usuarioId } = req.params;
    const usuario = await Usuario.findById(usuarioId).populate('favoritos');
    res.status(200).json(usuario);
},
newUsuarioFavorito: async(req, res, next) => {
    const { usuarioId } = req.params;
    const newFavorito = new favorito(req.body);
    const usuario = await Usuario.findById(usuarioId);
    newFavorito.usuario = usuario;
    await newFavorito.save();
    usuario.favoritos.push(newFavorito);
    await usuario.save();
    res.status(201).json(newFavorito);
},


};