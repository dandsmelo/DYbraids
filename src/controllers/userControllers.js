const database = require('../config/index');
const tabela = require('../models/userModels');
const bcrypt = require('bcrypt');

class LoginControllers {
  static async Cadastrar(req, res) {
    try {
      // Sincronizando com o banco de dados
      await database.sync();

      // Verifica se o usuário já existe
      const existingUser = await tabela.findOne({ where: { Nome: req.body.Nome } });
      if (existingUser) {
        return res.status(409).json({ message: 'Usuário já existe.' });
      }

      // Hash da senha antes de salvar no banco de dados
      const hashedPassword = await bcrypt.hash(req.body.Senha, 10);
      req.body.Senha = hashedPassword;

      // Cria o usuário
      const resultadoCreate = await tabela.create(req.body);
      console.log(resultadoCreate);
      res.status(200).json({ message: 'Cadastrado com sucesso.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }

  static async Login(req, res) {
    try {
      await database.sync();

      // Procura o usuário pelo nome
      const user = await tabela.findOne({ where: { Nome: req.body.Nome } });
      if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado.' });
      }

      // Compara a senha fornecida com a senha hash armazenada no banco de dados
      const passwordMatch = await bcrypt.compare(req.body.Senha, user.Senha);

      if (passwordMatch) {
        res.status(200).json({ message: 'Login bem-sucedido.' });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro interno do servidor.' });
    }
  }
}

module.exports = LoginControllers;
