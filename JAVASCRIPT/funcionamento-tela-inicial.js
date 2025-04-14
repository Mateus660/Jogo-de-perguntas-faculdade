var nome = document.getElementById('nome');
var enviar = document.getElementById('enviar');
var labelnome = document.getElementById('labelnome');


function nomecorr() {
    if (nome.value.length <= 3) {
        labelnome.innerHTML = "Pelo menos 4 caracteres";
        labelnome.style.color = "red";
    } else {
        labelnome.innerHTML = "Insira seu nome";
        labelnome.style.color = "black";
    }
}


function cadastrar() {
    // Guarda o nome atual no localStorage (para usar depois no jogo e no ranking)
    localStorage.setItem('jogadorAtual', nome.value);

    // Se quiser salvar o histórico de nomes (opcional)
    let nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];
    nomesSalvos.push(nome.value);
    localStorage.setItem('nomes', JSON.stringify(nomesSalvos));

    location.href = "tela-explicacao.html";
}
