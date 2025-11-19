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

let batalhaNaval = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

const navioHorizontal = (linha, coluna1, coluna2, coluna3, coluna4) => {
    batalhaNaval[linha][coluna1] = 1
    batalhaNaval[linha][coluna2] = 1
    batalhaNaval[linha][coluna3] = 1
    batalhaNaval[linha][coluna4] = 1
}

const navioVertical = (coluna, linha1, linha2, linha3, linha4,) => {
    batalhaNaval[linha1][coluna] = 1
    batalhaNaval[linha2][coluna] = 1
    batalhaNaval[linha3][coluna] = 1
    batalhaNaval[linha4][coluna] = 1
}
navioHorizontal(1,2,3,4,5)
navioHorizontal(4, 6)
navioHorizontal(9, 1,2, 8,9)
navioVertical(9,0,1,2,3)
navioVertical(1,3,5,6)
console.log(batalhaNaval)