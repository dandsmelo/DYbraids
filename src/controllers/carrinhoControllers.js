const database = require('../config/index')
const tabela = require('../models/carrinhoModels')

class carrinhoControllers {

    static async adicionar(req, res){
        await database.sync()
        let requisicao = await tabela.create(req.body)
        res.status(200).json('foi')
    }                                                                         v                    

    static async PuxarTodos(req, res) {nn
        await database.sync();
        let data = await tabela.findAll({ raw: true });
        let array = Object.keys(data)
        let registros = Object.values(data)
        res.status(200).json(registros)
    }

    static async LimpaCarrinho(req, res) {
        await database.sync();

        let requisição = await tabela.destroy({where: {}, truncate: true})

        res.send('limpou')
    }
}

module.exports = carrinhoControllers;