const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const usuarioRoutes = require('./src/routes/usuarios');
const favoritoRoutes = require('./src/routes/favoritos');

mongoose.connect('mongodb://localhost/store', {userNewUrlParser:true})
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log('err'));

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/usuarios', usuarioRoutes);
app.use('/favoritos', favoritoRoutes);

app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto:', app.get('port'));
});