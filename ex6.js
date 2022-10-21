/*
Contagem de vogais.
Crie uma função que retorna quantas vogais tem dentro de 
um texto.
*/


EX1:
function contaVogais(texto) {
    let qtdVogais = 0;

    for (let i=0; i<texto.length; i++){
        const ehVogalA = texto[i] === "a" || texto[i] === "A";
        const ehVogalE = texto[i] === "e" || texto[i] === "E";
        const ehVogalI = texto[i] === "i" || texto[i] === "I";
        const ehVogalO = texto[i] === "o" || texto[i] === "O";
        const ehVogalU = texto[i] === "u" || texto[i] === "U";

        if (ehVogalA || ehVogalE || ehVogalI || ehVogalO || ehVogalU)
            qtdVogais++;
    }

    return qtdVogais;
}

let texto = "Bootcamp Full Stack Developer do ITuring";

console.log(contaVogais(texto));

/*
function contaVogais(texto) {
    let qtdVogais = 0;

    for (let i=0; i<texto.length; i++){
        if ("aeiouAEIOU".includes(texto[i]))
            qtdVogais++;
    }

    return qtdVogais;
}

let texto = "Bootcamp Full Stack Developer do ITuring";

console.log(contaVogais(texto));
*/