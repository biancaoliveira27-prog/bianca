// Seleciona o botão no HTML pelo ID
const botao = document.getElementById('botaoCor');

// Função para gerar uma cor hexadecimal aleatória (ex: #FFA102)
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    
    // Altera a cor de fundo do body
    document.body.style.backgroundColor = novaCor;
});
