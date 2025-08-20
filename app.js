let amigos = []; 
function adicionarAmigo(){
   let amigo = document.getElementById("amigo").value;
   if(amigo.trim() !== ""){
         addAmigo(amigo);
         amigo = document.getElementById("amigo").value = "";
         statusCampo("Amigo adicionado com sucesso!");
         console.log(amigos);
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
    


