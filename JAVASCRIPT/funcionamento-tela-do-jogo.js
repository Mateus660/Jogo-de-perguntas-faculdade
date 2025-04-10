var responder = document.getElementById('responder')


function resp() {
  // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas = document.querySelectorAll('.alternativas');
  
  // Percorre todas e vê qual está marcada
  alternativas.forEach(function(alternativa) {
      if (alternativa.checked) {
          if (alternativa.value === "jupiter") {
              alert("Você acertou!");
          } else {
              alert("Você errou!");
          }
      }
  });
}

function afirmar() {
     // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas = document.querySelectorAll('.alternativas');
  
  // Percorre todas e vê qual está marcada
  alternativas.forEach(function(alternativa) {
      if (alternativa.checked) {
          if (alternativa.value === "Cinco") {
              alert("Você acertou!");
          } else {
              alert("Você errou!");
          }
      }
  });
}
   