let amigos = []; // Array para armazenar os amigos
let amigosSorteados = []; // Array para armazenar os amigos sorteados


// Função para adicionar um amigo ao array e atualizar a lista
function adicionarAmigo(){
   let amigo = document.getElementById("amigo").value;
   if(amigo.trim() !== ""){
         addAmigo(amigo);
         amigo = document.getElementById("amigo").value = "";
         statusCampo("Amigo adicionado com sucesso!");
         console.log(amigos);
         console.log(amigos.length);
         mostrarListaAmigos();
   }else{
        erroDecampo();
   }
}
function addAmigo(amigo){
    amigos.push(amigo);
}

function erroDecampo(){
    statusCampo("Por favor, digite um nome válido.");
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function statusCampo(mensagem){
    document.getElementById("status").innerHTML = mensagem;}

function sortearAmigo(){
    statusCampo("");
    if(amigos.length < 2){
        erroListaAmigosVazia();
        return; // Se houver menos de dois amigos, não faz nada 
    } else {
        if(amigos.length === amigosSorteados.length){
            mostrarResultado("Todos os amigos já foram sorteados.");
            return; // Se todos os amigos já foram sorteados, não faz nada
        }
        let amigoSecreto = sortear(); // Chama a função para sortear um amigo
        if(verificarAmigosSorteados(amigoSecreto)){
            sortearAmigo(); // Se o amigo já foi sorteado, chama a função novamente
        }else{
            amigosSorteados.push(amigoSecreto); // Adiciona o amigo sorteado ao array;
            sucessoResultado(amigoSecreto); // Exibe a mensagem de sucesso
            destacarAmigoSorteado(amigoSecreto); // Destaca o amigo sorteado na lista

           
            
        }
    }
}

// faça a parte de reiniciar e também fazer algo em relação ao usuario que sorteia todos os nomes e quer adicionar mais amigos. talves deixar o botão adicionar desabilitado até reiniciar ou colocar um botão de adicionar mais amigos

function sucessoResultado(amigoSecreto){
    document.getElementById("resultado").classList.remove("result-list-vazia");
    document.getElementById("resultado").classList.add("result-list");
    mostrarResultado(`O amigo sorteado é: <strong>${amigoSecreto}</strong>`, "result-list");
}

function mostrarResultado(mensagem){
    document.getElementById("resultado").innerHTML = mensagem;
}

function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de exibir os amigos
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li data-nome="${amigos[i]}">${amigos[i]} -</li>`;
    }
}

function verificarAmigosSorteados(amigo){
    if(amigosSorteados.includes(amigo)){
        return true; // O amigo já foi sorteado
    }
    return false; // O amigo não foi sorteado
}

function sortear(){
    let tamanhoArray = amigos.length;
    let numeroAleatorio = Math.floor(Math.random() * tamanhoArray);
    return amigos[numeroAleatorio];
}

function destacarAmigoSorteado(amigo) {
    let lista = document.getElementById("listaAmigos");
    let itens = lista.getElementsByTagName("li");
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].getAttribute("data-nome") === amigo) {
            itens[i].classList.add("amigo-sorteado");
        }
    }
}

function erroListaAmigosVazia(){
    document.getElementById("resultado").classList.remove("result-list");
    document.getElementById("resultado").classList.add("result-list-vazia");
    mostrarResultado("Adicione pelo menos dois amigos para sortear.");
    }

