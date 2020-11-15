const express = require('express');
const bodyParser = require('body-parser');


const App = express();


const Post = require('./routes/posts');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: false }));
//CAMBIO AQUI
App.use('/posts', Post);

module.exports = App;