var responder = document.getElementById('responder')


function resp1() {
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

function resp2() {
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
   
function resp3() {
     // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas = document.querySelectorAll('.alternativas');
  
  // Percorre todas e vê qual está marcada
  alternativas.forEach(function(alternativa) {
      if (alternativa.checked) {
          if (alternativa.value === "terra") {
              alert("Você acertou!");
          } else {
              alert("Você errou!");
          }
      }
  });
}