const express = require('express');

const prodControllers = require('../controllers/prodControllers')
const userControllers = require('../controllers/userControllers')
const carrinhoControllers = require('../controllers/carrinhoControllers')
const router = express.Router();

router 
    .get('/cursos', prodControllers.PuxarTodos)
    .post('/cad', userControllers.Cadastrar)
    .post('/aut', userControllers.Login)
    .get('/carrinho', carrinhoControllers.PuxarTodos)
    .delete('/limpar', carrinhoControllers.LimpaCarrinho)
    .post('/adicionar', carrinhoControllers.adicionar)
module.exports = router;