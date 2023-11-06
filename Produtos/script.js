// Carrinho
function adicionarProduto(nome, preco) {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  carrinho.push({ nome: nome, preco: preco });
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinho();
}

function exibirCarrinho() {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  var listaItens = document.getElementById("itensCarrinho");
  var total = 0;

  listaItens.innerHTML = "";
  carrinho.forEach(function(item) {
    var li = document.createElement("li");
    li.textContent = item.nome + " - R$" + item.preco.toFixed(2);
    listaItens.appendChild(li);
    total += item.preco;
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

exibirCarrinho();

// Resumo do pedido 
function adicionarProdutoResumo(nome, preco) {
  var carrinho = JSON.parse(sessionStorage.getItem("carrinho")) || [];
  carrinho.push({ nome: nome, preco: preco });
  sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  exibirCarrinhoResumo();
}

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
