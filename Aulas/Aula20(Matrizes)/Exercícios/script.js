let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
matriz[1][2] = 1
console.log(matriz)

let amarok = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let somaAmarok = 0
for(let i=0; i<amarok.length; i++){
    for(let j=0; j<amarok.length; j++){
        console.log(amarok[i][j])
        somaAmarok+= amarok[i][j]
    }
}
console.log(`Soma di tudo ${somaAmarok}`)