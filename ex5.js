/*
Função que retorna o maior valor presente em uma lista
de números passada como parâmetro.
*/

/*
EX1:
const maiorItem = (lista) => {
    let maior = lista[0];


    for (let item of lista ){
        if (item > maior)
            maior = item;
    }

    return maior
}

let lista = [1,2,3,4,5,6,7,8,9];

console.log(maiorItem(lista));
*/

/*
EX2:
const maiorItem = (lista) => {
    let maior = lista[0];


    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior)
            maior = lista[i];
    }

    return maior
}

let lista = [1,2,3,4,5,6,7,8,9];

console.log(maiorItem(lista));
*/



// ACESSANDO A POSIÇÃO DA LISTA:
const maiorItem = (lista) => {
    let indiceMaior = 0;


    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > lista[indiceMaior])
            indiceMaior = i;
    }

    return indiceMaior
}

let lista = [9,2,3,4,5,6,7,8,1];

console.log(maiorItem(lista));
