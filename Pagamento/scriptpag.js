// Parte do front

const showContentRadio = document.getElementById('show-content-radio');
const content = document.getElementById('content');

showContentRadio.addEventListener('change', function() {
    if (showContentRadio.checked) {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
});

const showContentRadio3 = document.getElementById('show-content-radio3');
const content3 = document.getElementById('content3');

showContentRadio3.addEventListener('change', function() {
    if (showContentRadio3.checked) {
      content3.style.display = 'block';
    } else {
      content3.style.display = 'none';
    }
});


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

exibirCarrinhoResumo();

//função de redirecionamento
function redirecionarFim(){
  var URL = "/Pagamento/compraRealizada.html";
  window.location.href = (URL);
}