const router = require('express-promise-router')();

const { index,
        newFavorito,
        getFavorito,
        updateFavorito,
        deleteFavorito,
        getFavoritoUsuario    
} = require('../controllers/favoritos');

router.get('/', index);
router.post('/usuarioId/Favoritos', newFavorito);
router.get('/:favoritoId', getFavorito);
router.patch('/:favoritoId', updateFavorito);
router.delete('/:favoritoId', deleteFavorito);
router.get('/:favoritoId', getFavoritoUsuario);




module.exports = router;