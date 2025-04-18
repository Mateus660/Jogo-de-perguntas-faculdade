var responder = document.getElementById('responder')
let pontuacao = localStorage.getItem('pontuacao') ? parseInt(localStorage.getItem('pontuacao')) : 0;



function resp1() {
  // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas = document.querySelectorAll('.alternativas');
  
  // Percorre todas e vê qual está marcada
  alternativas.forEach(function(alternativa) {
      if (alternativa.checked) {
          if (alternativa.value === "Separar e colocar na lixeira correta") {
              alert("Você acertou!");
              pontuacao++;
              localStorage.setItem('pontuacao', pontuacao);

          } else {
              alert("Você errou!");
          }
      }
  });
}

function resp2() {
     // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas2 = document.querySelectorAll('.alternativas2');
  
  // Percorre todas e vê qual está marcada
  alternativas2.forEach(function(alternativa2) {
      if (alternativa2.checked) {
          if (alternativa2.value === "Ipê") {
              alert("Você acertou!");
              pontuacao++;
              localStorage.setItem('pontuacao', pontuacao);

          } else {
              alert("Você errou!");
          }
      }
  });
}
   
function resp3() {
     // Pega todas as alternativas (inputs com class "alternativas")
  var alternativas3 = document.querySelectorAll('.alternativas3');
  
  // Percorre todas e vê qual está marcada
  alternativas3.forEach(function(alternativa3) {
      if (alternativa3.checked) {
          if (alternativa3.value === "Fechar a torneira ao escovar os dentes") {
              alert("Você acertou!");
              pontuacao++;
              localStorage.setItem('pontuacao', pontuacao);

          } else {
              alert("Você errou!");
          }
      }
  });
}

function resp4() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas4 = document.querySelectorAll('.alternativas4');
 
 // Percorre todas e vê qual está marcada
 alternativas4.forEach(function(alternativas4) {
     if (alternativas4.checked) {
         if (alternativas4.value === "Tudo ao nosso redor: natureza, animais, pessoas") {
             alert("Você acertou!");
             pontuacao++;
             localStorage.setItem('pontuacao', pontuacao);

         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp5() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas5 = document.querySelectorAll('.alternativas5');
 
 // Percorre todas e vê qual está marcada
 alternativas5.forEach(function(alternativa5) {
     if (alternativa5.checked) {
         if (alternativa5.value === "Porque são parte da natureza e ajudam o equilíbrio ambiental") {
             alert("Você acertou!");
             pontuacao++;
             localStorage.setItem('pontuacao', pontuacao);

         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp6() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas6 = document.querySelectorAll('.alternativas6');
 
 // Percorre todas e vê qual está marcada
 alternativas6.forEach(function(alternativa6) {
     if (alternativa6.checked) {
         if (alternativa6.value === "Jogar lixo na rua") {
             alert("Você acertou!");
             pontuacao++;
             localStorage.setItem('pontuacao', pontuacao);

         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp7() {
    // Pega todas as alternativas (inputs com class "alternativas")
 var alternativas7 = document.querySelectorAll('.alternativas7');
 
 // Percorre todas e vê qual está marcada
 alternativas7.forEach(function(alternativa7) {
     if (alternativa7.checked) {
         if (alternativa7.value === "Latas e garrafas plásticas") {
             alert("Você acertou!");
             pontuacao++;
             localStorage.setItem('pontuacao', pontuacao);

         } else {
             alert("Você errou!");
         }
     }
 });
}

function resp8() {
    var alternativas8 = document.querySelectorAll('.alternativas8') 

    alternativas8.forEach(function(alternativa8) {
        if (alternativa8.checked) {
            if (alternativa8.value === "Apagando a luz ao sair do quarto") {
                alert('Você aceertou')
                pontuacao++;
                localStorage.setItem('pontuacao', pontuacao);

            } else {
                alert('Você errou')
            }
        }
    })
}

function resp9() {
    var alternativas9 = document.querySelectorAll('.alternativas9') 

    alternativas9.forEach(function(alternativas9) {
        if (alternativas9.checked) {
            if (alternativas9.value === 'Animais perdem seu lar') {
                alert('Você acertou')
                pontuacao++;
                localStorage.setItem('pontuacao', pontuacao);

            } else {
                alert('Você errou')
            }
       }
    })
}

function resp10() {
    var alternativas10 = document.querySelectorAll('.alternativas10')

    alternativas10.forEach(function(alternativas10) {
        if (alternativas10.checked) {
            if (alternativas10.value === 'Falcão-peregrino') {
                alert('Você acertou')
                pontuacao++;
                localStorage.setItem('pontuacao', pontuacao);

            } else {
                alert('Você errou')
            }
        }
    })
}

function finalizarjogo() {
    window.location.href = 'resulltado.html';
}


window.onload = function() {
    let pontos = localStorage.getItem('pontuacaoFinal') || 0;
    
}

