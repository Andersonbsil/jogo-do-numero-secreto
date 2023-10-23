let listaDeNumerosSoteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibiTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibiTextoNaTela('h1', 'jogo do número secreto');
    exibiTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibiTextoNaTela('h1', 'Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa.';
        let mnsagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibiTextoNaTela('p', mnsagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibiTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibiTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite +1);
    let quatidadeDeElementosNaLista = listaDeNumerosSoteados.length;

    if (quatidadeDeElementosNaLista == numeroLimite);
    listaDeNumerosSoteados = [];

    if (listaDeNumerosSoteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSoteados.push(numeroEscolhido);
        return numeroEscolhido
    }
    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTextoInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

}