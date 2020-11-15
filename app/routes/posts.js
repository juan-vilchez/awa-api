const express = require('express');
const PostsCtrl = require('../controllers/PostsController');
const Router = express.Router();


Router.get('/listar', function(req, res) {
    controller.show(req, res);
});

//Router.get('/listar', PostsCtrl.index) //index
/*  .post('/create', PostsCtrl.create) //crear nuevo post
 .put('/:key/:value', PostsCtrl.find, PostsCtrl.update) //editar
 //.delete('remove/:value', PostsCtrl.find, PostsCtrl.remove) //eliminar
 .get('/:key/:value', PostsCtrl.find, PostsCtrl.show) //mostrar post */


//.delete('/remove/:value', function(req, res) { PostsCtrl.delete2(req, res); }); //eliminar

module.exports = Router;


/* 
Router.get('/listar', PostsCtrl.index) //index
    .post('/create', PostsCtrl.create) //crear nuevo post
    .put('/:key/:value', PostsCtrl.find, PostsCtrl.update) //editar
    //.delete('remove/:value', PostsCtrl.find, PostsCtrl.remove) //eliminar
    .get('/:key/:value', PostsCtrl.find, PostsCtrl.show) //mostrar post


.delete('/remove/:value', function(req, res) { PostsCtrl.delete2(req, res); }); //eliminar

module.exports = Router; */