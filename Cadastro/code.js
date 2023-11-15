
// Funções de redirecionamento
function redirecionarLogin(){
  var URL = "/Login/login.html";
  window.location.href = (URL);
}

function redirecionarProduto(){
  var URL = "/Produtos/produtos.html";
  window.location.href = (URL);
}

// scripts.js

document.getElementById("forms").addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("/cad", { // Ajuste o endpoint para corresponder à rota correta no servidor
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, senha }),
  })
  .then((response) => {
    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      // Redirecionamento após o cadastro, se necessário
    } else {
      alert("Erro ao cadastrar o usuário. Tente novamente.");
    }
  })
  .catch((error) => {
    console.error("Erro ao fazer a requisição:", error);
  });
});
