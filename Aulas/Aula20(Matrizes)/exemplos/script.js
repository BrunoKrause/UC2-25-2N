let matriz = [ //Matriz de 2x3 (2 linhas)x(3 colunas)
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//percorrendo matriz
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j])
    }
}

//somando(operações em matrizes)
let soma = 0
for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
        console.log(matriz[i][j])
        soma += matriz[i][j]
    }
}
console.log('Somando os elementos', soma)