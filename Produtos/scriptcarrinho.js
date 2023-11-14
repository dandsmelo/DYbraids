const direita = document.getElementById('direita');
const adicionarFormaPagamentoButton = document.getElementById('adicionar-forma-pagamento');

direita.addEventListener('mouseenter', () => {
    adicionarFormaPagamentoButton.style.display = 'block'; // Exibe o botão ao passar o mouse sobre a div
});

direita.addEventListener('mouseleave', () => {
    adicionarFormaPagamentoButton.style.display = 'none'; // Oculta o botão ao tirar o mouse da div
});



  

