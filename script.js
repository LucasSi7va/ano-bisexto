
function imprimirNaPagina(mensagem) {
    var divMensagem = document.getElementById('mensagem');

    divMensagem.innerHTML = mensagem;
}




let ano = prompt("digite um ano com 4 digitos: ")

if (ano.length === 4 && !isNaN(ano)){

  imprimirNaPagina("e bissexto")
}

else{
  imprimirNaPagina("nao e bissexto")
}





