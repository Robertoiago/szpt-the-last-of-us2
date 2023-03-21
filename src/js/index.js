/*
    OBJETIVO - qyando clícarmos no botão temos que mostrar a imagem de fundo correspondente





-

- 

- 

- 
*/

// PASSO 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();


        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        
        mostrarImagemDeFundo(indice);
    })
})


function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    console.log(botaoSelecionado.classList.remove('selecionado'));
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
