/*function cadastrarUsuario(nome, email, senha) {
  fetch("/cad", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email, senha }),
  })
  .then((response) => {
      if (response.ok) {
          return response.json(); // Retorna os dados do servidor (se necessário)
      }
      throw new Error('Erro ao cadastrar o usuário.');
  })
  .then((data) => {
      alert("Cadastro realizado com sucesso!");
      redirecionarParaProdutos();
  })
  .catch((error) => {
      alert("Erro ao cadastrar o usuário. Tente novamente.");
      console.error("Erro ao fazer a requisição:", error);
  });
}

function redirecionarParaProdutos() {
  window.location.href = "/Produtos/produtos.html";
}

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  cadastrarUsuario(nome, email, senha);
});*/

function redirecionarLogin(){
  var URL = "/Login/login.html";
  window.location.href = URL;
}
