// Função para adicionar produtos ao carrinho
function adicionarProduto(nome, preco, imagem) {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  
  // Verifique se o produto já está no carrinho
  var produtoExistente = carrinho.find(function(item) {
    return item.nome === nome;
  });

  if (produtoExistente) {
    // Se o produto já existe, apenas aumente a quantidade
    produtoExistente.quantidade += 1;
  } else {
    // Caso contrário, crie um novo item no carrinho
    carrinho.push({ nome: nome, preco: preco, imagem: imagem, quantidade: 1 });
  }

  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinho();
  exibirCarrinhoResumo(); // Atualiza também o resumo do pedido

  window.alert("Produto adicionado ao carrinho");
}

// Função para exibir o carrinho
function exibirCarrinho() {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  var listaItens = document.getElementById("itensCarrinho");
  var total = 0;

  listaItens.innerHTML = "";

  carrinho.forEach(function(item) {
    var li = document.createElement("li");

    var imagem = document.createElement("img");
    imagem.src = item.imagem;

    var quantidadeElement = document.createElement("span");
    quantidadeElement.textContent = " ";
    
    var decrementarButton = document.createElement("button");
    decrementarButton.textContent = "-";
    decrementarButton.onclick = function () {
      if (item.quantidade > 0) {
        item.quantidade--;
        contador.textContent = item.quantidade;
        if (item.quantidade === 0) {
          contador.style.display = "none";
        }
        atualizarQuantidadeEValor();
      }
    };

    var contador = document.createElement("span");
    contador.textContent = item.quantidade;
    contador.id = "contador-" + item.nome;
    contador.style.display = item.quantidade > 0 ? "inline" : "none";

    var incrementarButton = document.createElement("button");
    incrementarButton.textContent = "+";
    incrementarButton.onclick = function () {
      item.quantidade++;
      contador.textContent = item.quantidade;
      contador.style.display = "inline";
      atualizarQuantidadeEValor();
    };

    var valorElement = document.createElement("span");
    valorElement.textContent = "R$" + (item.preco * item.quantidade).toFixed(2);

    quantidadeElement.appendChild(decrementarButton);
    quantidadeElement.appendChild(contador);
    quantidadeElement.appendChild(incrementarButton);

    li.appendChild(imagem);
    li.appendChild(quantidadeElement);
    li.appendChild(valorElement);

    listaItens.appendChild(li);

    total += item.preco * item.quantidade;
  });

  document.getElementById("total").textContent = "TOTAL = R$" + total.toFixed(2);
}




// Exibir o carrinho ao carregar a página
exibirCarrinho();

// Função para adicionar produtos ao resumo do pedido
function adicionarProdutoResumo(nome, preco) {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  carrinho.push({ nome: nome, preco: preco });
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinhoResumo();
}

// Função para exibir o resumo do pedido
function exibirCarrinhoResumo() {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  var listaItens = document.getElementById("itensresumo");
  var total = 0;

  listaItens.innerHTML = "";

  carrinho.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item.nome + " --- R$" + (item.preco * item.quantidade).toFixed(2);
    listaItens.appendChild(li);
    total += item.preco * item.quantidade;
  });

  document.getElementById("totall").textContent = total.toFixed(2);
}


// Exibir o resumo do pedido ao carregar a página
exibirCarrinhoResumo();

//contador

  var contador = 0;

function incrementar() {
  contador++;
  document.getElementById("contador").textContent = contador;
}

function decrementar() {
  if (contador > 0) {
    contador--;
    document.getElementById("contador").textContent = contador;
  }
}

//banco de dados teste

const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DYbraids'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro na conexão com o banco de dados: ' + err.stack);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});

function submitData() {
    const inputData = document.getElementById('inputData').value;

    connection.query('INSERT INTO sua_tabela (campo) VALUES (?)', [inputData], (err, results) => {
        if (err) {
            console.error('Erro ao inserir dados: ' + err);
            return;
        }
        console.log('Dados inseridos com sucesso.');
    });
}

// Funções de redirecionamento

function redirecionarCarrinho(){
  var URL = "../Produtos/carrinho.html";
  window.location.href = (URL);
}

function redirecionarCadastro(){
  var URL = "/Cadastro/cadastro.html";
  window.location.href = (URL);
}

function redirecionarLogin(){
  var URL = "/Login/login.html";
  window.location.href = (URL);
}