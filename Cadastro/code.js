function cadastrar(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtenha os valores dos campos de entrada
    var nome = document.querySelector('input[name="Nome"]').value;
    var celular = document.querySelector('input[name="Celular"]').value;
    var email = document.querySelector('input[name="Email"]').value;
    var senha = document.querySelector('input[name="Senha"]').value;
    var confirmarSenha = document.querySelector('input[name="ConfirmarSenha"]').value;

    // Faça a validação dos campos (opcional)

    // Exemplo de validação básica
    if (nome === '' || celular === '' || email === '' || senha === '' || confirmarSenha === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Verifique se as senhas correspondem
    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem!');
        return;
    }

    // Envie os dados do formulário para onde quiser (por exemplo, um servidor)

    // Exemplo de exibição dos dados enviados
    console.log('Nome:', nome);
    console.log('Celular:', celular);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmarSenha);

    // Limpe os campos do formulário após o envio
    document.querySelector('form').reset();
}

// Adicione um ouvinte de evento ao formulário para capturar o envio
document.querySelector('form').addEventListener('submit', cadastrar);
