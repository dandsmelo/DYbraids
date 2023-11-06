// Função para adicionar produtos ao carrinho
function adicionarProduto(nome, preco, imagem) {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  carrinho.push({ nome: nome, preco: preco, imagem: imagem });
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinho();
  exibirCarrinhoResumo(); // Atualiza também o resumo do pedido
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
    imagem.src = item.imagem; // Exibir a imagem do produto
  

    var descricao = document.createTextNode(item.nome + " - R$" + item.preco.toFixed(2));
    
    li.appendChild(imagem);
    li.appendChild(descricao);
    
    listaItens.appendChild(li);
    
    total += item.preco;
  });

  document.getElementById("total").textContent = total.toFixed(2);
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
  carrinho.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.nome + " - R$" + item.preco.toFixed(2);
    listaItens.appendChild(li);
    total += item.preco;
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



