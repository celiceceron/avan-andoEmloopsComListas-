/*
Tarefa 15 da semana 2.
Tirando dúvidas:
*/

function calculoImc (peso, altura) {
    return peso / (altura * altura);
} 

// SOLUÇÃO MAIS ENXUTA:
function classificacaoImc (imc) {
   if (imc < 18.5)
       return "Abaixo do Peso"
   if (imc < 25)
       return "Peso Normal"
   if (imc < 30)
       return "Sobrepeso"
   
       return "Obesidade"
}

function checagemImc (peso, altura) {
   const imc = calculoImc (peso, altura);
   console.log(classificacaoImc(imc));
}
   

checagemImc(30, 1.7);