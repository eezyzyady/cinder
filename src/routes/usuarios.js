const router = require('express-promise-router')();

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const { index,
        newUsuario,
        getUsuario,
        updateUsuario,
        deleteUsuario,
        getUsuarioFavoritos,
        newUsuarioFavorito } = require('../controllers/usuario');

router.get('/', index);
router.post('/', upload.single('productImage'), newUsuario);
router.get('/:usuarioId', getUsuario);
router.put('/:usuarioId', updateUsuario);
router.delete('/:usuarioId', deleteUsuario);
router.get('/:usuarioId/Favoritos', getUsuarioFavoritos);
router.put('/:usuarioId/Favoritos', newUsuarioFavorito);



module.exports = router;