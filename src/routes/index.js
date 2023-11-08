const express = require('express');

const prodControllers = require('../controllers/prodControllers')
const UserControllers = require('../controllers/UserControllers')
const carrinhoControllers = require('../controllers/carrinhoControllers')
const router = express.Router();

router 
    .get('/cursos', prodControllers.PuxarTodos)
    .post('/cad',UserControllers.Cadastrar)
    .post('/aut', UserControllers.Login)
    .get('/carrinho', carrinhoControllers.PuxarTodos)
    .delete('/limpar', carrinhoControllers.LimpaCarrinho)
    .post('/adicionar', carrinhoControllers.adicionar)
module.exports = router;