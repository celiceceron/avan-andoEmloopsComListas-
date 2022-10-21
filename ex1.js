/*
Lista de seriados, exemplo igual o da tarefa.
*/


const listaDeSeriados = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] 

let seriadosEncontrados = [];
let i = 0;

while (i < listaDeSeriados.length){
    if (listaDeSeriados[i]. includes("Th")){
        seriadosEncontrados.push(listaDeSeriados[i]);
}
    i++;
}


console.log(seriadosEncontrados);

/*
EXEMPLO PARA O EXERCÍCIO:

function encontraSeriados["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] {
    let seriadosEncontrados = [];
    //  WHILE AQUI..
    if (listaDeSeriadoss[i].includes(termoDeBusca)){
        seriadosEncontrados.push(listaDeSeriados[i])
    }
    // FIM DO WHILE..
    return seriadosEncontrados;

}

const listaDeSeriados = [["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"] 
];
const termoDeBusca = "Th";
encontraSeriados(listaDeSeriados, termoDeBusca);
//
FINALIZA COM CONSOLE.LOG

