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

function cadastrar () {
    window.localStorage.setItem('nome', nome.value)
 }
 