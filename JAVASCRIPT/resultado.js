window.onload = function() {
    let resultado = document.getElementById('resultado');
    let pontos = localStorage.getItem('pontuacao') || 0;
    resultado.innerHTML = '<p>Você acertou ' + pontos + ' de 10 perguntas.</p>';
}