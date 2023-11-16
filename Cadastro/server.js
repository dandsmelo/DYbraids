const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array para armazenar temporariamente os usuários (simulando um banco de dados temporário)
let usuarios = [];

// Rota para exibir o formulário de cadastro
app.get('/cadastro', (req, res) => {
  res.sendFile(__dirname + '/cadastro.html');
});

// Rota para lidar com o cadastro de usuários
app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;
  
  // Simular validação - verificar se o usuário já existe
  const usuarioExistente = usuarios.find(user => user.email === email);
  if (usuarioExistente) {
    return res.status(400).send('Usuário já existe!');
  }

  // Adicionar o novo usuário ao array (simulando inserção no banco de dados)
  usuarios.push({ nome, email, senha });

  // Enviar uma resposta de sucesso com um alerta para o navegador
  res.status(200).send('Usuário cadastrado com sucesso!');

  // Ou você pode enviar uma resposta em JSON
  // res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
});

// Inicie o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
