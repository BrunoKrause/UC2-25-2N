//1

let array //Cria a variável array
console.log('a. ', array) //Imprime a variável array, undefined

array = null //Define a variável como nula
console.log('b. ', array) //Imprime a variável array, null

array = [3,4,5,6,7,8,9,10,11,12,13] //Altera a lista da variável "array"
console.log('c. ', array.length) //Imprime c. 11

let i = 0 //Cria a variável "i" com o valor "0"
console.log('d. ', array[i]) //Imprime no console d. 3

array[i+1] = 19 //Altera o valor "4" na lista para "19"
console.log('e. ', array) // Imprime no console e. [3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6] //Cria a variável "valor" com o valor "9"
console.log('f. ', valor) //Imprime f. 9

//2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A","I"), frase,length)
//Qual será o