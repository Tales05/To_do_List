const colorSeagreen = document.querySelector(".seagreen");
const colorSlateblue = document.querySelector(".slateblue");
const colorTomato = document.querySelector(".tomato");
const inputAtividade = document.querySelector(".textList")
const botaoAdiciona = document.querySelector("#botaoAdiciona")
const botaoLimpar = document.querySelector("#botaoLimpar")
const listaAtividade = document.querySelector(".listEscrita")

colorSeagreen.addEventListener('mouseover', () => mudarCordeFundo("seagreen"));
colorSlateblue.addEventListener('click', () => mudarCordeFundo("slateblue"));
colorTomato.addEventListener('mouseout', () => mudarCordeFundo("#005D99"));
colorTomato.addEventListener('mouseover', () => mudarCordeFundo("tomato"));
botaoAdiciona.addEventListener('click', () => executaAtividade());
botaoLimpar.addEventListener('click', ()=> limparTodasAtividades())

function mudarCordeFundo(cor){
    botaoLimpar.style.background = cor;
    document.body.style.background = cor;
    listaAtividade.style.background = cor;

}

function executaAtividade() {
    if(inputAtividade.value.length > 5){
        criarAtividade();
    }else {
        alert('Ativade não descrita!!!');
    }
}


function criarAtividade(){
    const atividadeExecutada = document.createElement('div');
    const textAtividade = document.createElement('p');
    const limparAtividade = document.createElement('button');
    textAtividade.textContent = inputAtividade.value;
    limparAtividade.textContent = "Limpar";
    atividadeExecutada.classList.add("listaEstilizada");
    limparAtividade.classList.add("bontaoExcluir");
    listaAtividade.appendChild(atividadeExecutada);
    atividadeExecutada.appendChild(textAtividade);
    atividadeExecutada.appendChild(limparAtividade);
    limparAtividade.addEventListener('click', () => ativilidaLimpar(atividadeExecutada));
}

function ativilidaLimpar(atividadeExecutada){
    listaAtividade.removeChild(atividadeExecutada)
}

function limparTodasAtividades() {
    while(listaAtividade.firstElementChild){
        listaAtividade.removeChild(listaAtividade.firstElementChild)
    }
}

window.addEventListener("keypress", (e)=> {
    if(e.key === "Enter"){
        executaAtividade();
    }
})