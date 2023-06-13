function cadastro() {
        var dados = JSON.parse(localStorage.getItem("tds"))
        localStorage.removeItem("tds")
        let id = document.querySelector("#id").value
        let login = document.querySelector("#login").value
        let senha = document.querySelector("#senha").value
    
        for (let i = 0; dados.length > i; i++) {
        if (id == dados[i].id){
            let user = { id: id, nome: login, senha: senha }
            dados[i] = user
            localStorage.setItem("tds", JSON.stringify(dados))
            alert("Atualizado!")
            break
            } 
        }
    }