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

//função de redirecionamento
function redirecionarFim(){
  var URL = "/Pagamento/compraRealizada.html";
  window.location.href = (URL);
}