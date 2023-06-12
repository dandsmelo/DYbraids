function login(){
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    
    let dados = [
    { "id":Date.now(),"nome":"yasmin","senha":123 }, //0
    { "id":Date.now(),"nome":"dandara","senha":2222 }, //1
    { "id":Date.now(),"nome":"bruna","senha":3333 } //2  
]

    for(let i=0;dados.length > i;i++){
    if(nome == dados[i].nome && senha == dados[i].senha){
        alert("Logado!")
        break
        }
    }
}