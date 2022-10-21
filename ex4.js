/*
Exibir todos os valores de uma lista.
Crie uma função que recebe uma lista de itens e exibe
todos os valores dessa lista.
*/

/*
EX1:
const exibeLista = (lista) => {
    for(let i = 0; i < lista.length; i++){
        console.log(lista[i]);

    }
}

let lista = ["Breaking Bad", "Game of Thrones",
 "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", 
 "This is Us"];

exibeLista(lista)
*/

/*
EX2:
const exibeLista = (lista) => {
    for(let i = 0; i < lista.length; i++){
        const valor = `[${i}] ${lista[i]}`;
        console.log(valor);

    }
}

let lista = ["Breaking Bad", "Game of Thrones",
 "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", 
 "This is Us"];

exibeLista(lista)
*/

const exibeLista = (lista) => {
    for(let [indice, item] of lista.entries())
        console.log(`[${indice}] ${item}`);

    }

let lista = ["Breaking Bad", "Game of Thrones",
 "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", 
 "This is Us"];

exibeLista(lista)