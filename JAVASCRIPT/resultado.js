window.onload = function () {
    let resultado = document.getElementById('resultado');

    let jogador = localStorage.getItem('jogadorAtual');
    let pontuacao = localStorage.getItem('pontuacao');

    if (jogador && pontuacao !== null) {
        resultado.innerHTML = `<p>${jogador}, você fez ${pontuacao} ponto(s)!</p>`;
    }

    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

    let jaAdicionado = ranking.some(item => item.nome === jogador && item.pontos === Number(pontuacao));
    if (!jaAdicionado) {
        ranking.push({ nome: jogador, pontos: Number(pontuacao) });
        localStorage.setItem('ranking', JSON.stringify(ranking));
    }

    let lista = document.createElement('ul');
    ranking.sort((a, b) => b.pontos - a.pontos);

    ranking.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome}: ${item.pontos} ponto(s)`;
        lista.appendChild(li);
    });

    resultado.appendChild(document.createElement('hr'));
    resultado.appendChild(document.createElement('h2')).textContent = "Ranking:";
    resultado.appendChild(lista);
}
