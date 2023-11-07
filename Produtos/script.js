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

    var quantidade = document.createTextNode(item.quantidade);
    var valor = document.createTextNode("R$" + (item.preco * item.quantidade).toFixed(2));

    li.appendChild(imagem);
    li.appendChild(quantidade);
    li.appendChild(valor);

    listaItens.appendChild(li);

    total += item.preco * item.quantidade;
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

  carrinho.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item.nome + " - R$" + (item.preco * item.quantidade).toFixed(2);
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



