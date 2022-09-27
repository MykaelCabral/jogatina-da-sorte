// if = se
// condicional = if else, if, else
// == = comparaçao e nao atribuiçao
// else =  se nao
// || = ou
// innerHTML = imprimir na tela a mensagem
//while = enquanto
var numeroSecreto = parseInt(Math.random() * 101);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "voce acertou " + numeroSecreto;
  } else if (chute < 0 || chute > 100) {
    elementoResultado.innerHTML =
      "comando invalido, digite um numero emtre 0 e 100";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "chute maior que numero secreto "; //+ //numeroSecreto ;
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "chute menor que numero secreto "; //+ //numeroSecreto ;
  } else {
    elementoResultado.innerHTML = "errou o numero secreto era " + numeroSecreto;
  }
}