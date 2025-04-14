function jogar () {
    location.href = "tela-do-jogo.html"
}

window.onload = function () {
    let nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];
    let ultimoNome = nomesSalvos[nomesSalvos.length - 1]; // Pega o último nome inserido

    if (ultimoNome) {
        document.getElementById('boasvindas').innerHTML = `Bem vindo, ${ultimoNome}!`;
    }
};
