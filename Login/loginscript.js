function login() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    const dados = [
        { "id": Date.now(), "nome": "yasmin", "senha": 123 }, // 0
        { "id": Date.now(), "nome": "dandara", "senha": 2222 }, // 1
        { "id": Date.now(), "nome": "bruna", "senha": 3333 } // 2  
    ];

    for (let i = 0; i < dados.length; i++) {
        if (nome === dados[i].nome && senha == dados[i].senha) {
            alert("Logado!");

            window.location.href = 'http://127.0.0.1:5500/Produtos/produtos.html';

            return; // Encerra a função quando o login é bem-sucedido
        }
    }

    // Se o loop for concluído sem encontrar uma correspondência, exibe uma mensagem de erro
    alert("Usuário ou senha incorretos.");
}
