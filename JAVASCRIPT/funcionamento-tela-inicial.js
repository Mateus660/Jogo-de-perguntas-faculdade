var nome = document.getElementById('nome')
var enviar = document.getElementById('enviar')
var labelnome = document.getElementById('labelnome')

function nomecorr () {
    if (nome.value.length <= 3) {
       labelnome.innerHTML = "Pelo menos 4 carateres"
       labelnome.style.color = "red"
    } else {
        labelnome.innerHTML = "Insira seu nome"
        labelnome.style.color = "Black"
    }


}

function cadastrar() {
    // Recupera o que já está salvo no localStorage (ou cria um array vazio)
    let nomesSalvos = JSON.parse(localStorage.getItem('nomes')) || [];

    // Adiciona o novo nome
    nomesSalvos.push(nome.value);

    // Salva de volta como JSON
    localStorage.setItem('nomes', JSON.stringify(nomesSalvos));
}

 