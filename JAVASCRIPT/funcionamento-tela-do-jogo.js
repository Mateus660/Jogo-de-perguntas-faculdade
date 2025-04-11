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

function resp4() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas = document.querySelectorAll('.alternativas');
 
 // Percorre todas e vê qual está marcada
 alternativas.forEach(function(alternativa) {
     if (alternativa.checked) {
         if (alternativa.value === "Uma proteção natural da Terra contra os raios solares.") {
             alert("Você acertou!");
         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp5() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas = document.querySelectorAll('.alternativas');
 
 // Percorre todas e vê qual está marcada
 alternativas.forEach(function(alternativa) {
     if (alternativa.checked) {
         if (alternativa.value === "Thomas Edison") {
             alert("Você acertou!");
         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp6() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas = document.querySelectorAll('.alternativas');
 
 // Percorre todas e vê qual está marcada
 alternativas.forEach(function(alternativa) {
     if (alternativa.checked) {
         if (alternativa.value === "França") {
             alert("Você acertou!");
         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp7() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas = document.querySelectorAll('.alternativas');
 
 // Percorre todas e vê qual está marcada
 alternativas.forEach(function(alternativa) {
     if (alternativa.checked) {
         if (alternativa.value === "Estribo") {
             alert("Você acertou!");
         } else {
             alert("Você errou!");
         }
     }
 });
}