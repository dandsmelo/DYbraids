const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 5500;

app.use(bodyParser.json());

const conexao = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  port: '5500',
  database: 'DY_Braids'
});

conexao.connect()
module.exports = conexao;
console.log(conexao);
/*
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados");
});

app.post("/cadastrar-usuario", (req, res) => {
  const { nome, email, senha } = req.body;

  const query = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  db.query(query, [nome, email, senha], (err, result) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err);
      res.status(500).json({ message: "Erro ao cadastrar usuário." });
    } else {
      res.status(201).json({ message: "Usuário cadastrado com sucesso." });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});


/*Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
    return;
  }
  console.log('Conectado ao banco de dados');
});
/*function inserirUsuario(nome, email, senha) {
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.run(query, [nome, email, senha], function(err) {
        if (err) {
            console.error('Erro ao inserir usuário: ' + err.message);
            return;
        }
        console.log('Usuário inserido com sucesso, ID: ' + this.lastID);
    });
}

const form = document.getElementById('forms');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = form.nome.value;
    const email = form.email.value;
    const senha = form.senha.value;

    inserirUsuario();
});

    const formE1 = document.querySelector("form");

    formE1.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(formE1);

      let nome = formData.get("nome");
      let email = formData.get("email");
      let pass = formData.get("senha");

      const data = new URLSearchParams(formData)

      fetch('http://localhost:5433/projeto/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body :  JSON.stringify({
                "nome": `${nome}`,
                "email" : `${email}`,
                "senha": `${pass}`
            })
      }).then(res => res.json())
        .then(data => {
          console.log(data)
          if(data == 5){
            alert('CADASTRADO')
            document.location.href= 'Produtos/produtos.html'
          }
        })
        .catch(error => console.log(error))

    })
*/
// Funções de redirecionamento
function redirecionarLogin(){
  var URL = "/Login/login.html";
  window.location.href = (URL);
}

function redirecionarProduto(){
  var URL = "/Produtos/produtos.html";
  window.location.href = (URL);
}