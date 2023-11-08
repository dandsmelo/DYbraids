const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  port: '5500',
  database: 'DY_Braids'
});

conexao.connect()
module.exports = connection

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
    return;
  }
  console.log('Conectado ao banco de dados');
});

function inserirUsuario(nome, celular, email, senha) {
    const query = 'INSERT INTO usuarios (nome, celular, email, senha) VALUES (?, ?, ?, ?)';
    db.run(query, [nome, celular, email, senha], function(err) {
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
        const celular = form.celular.value;
        const email = form.email.value;
        const senha = form.senha.value;

        // Chame a função de inserção de usuário aqui
        // Exemplo: inserirUsuario(nome, celular, email, senha);
    });

// Funções de redirecionamento
function redirecionarLogin(){
  var URL = "/Login/login.html";
  window.location.href = (URL);
}