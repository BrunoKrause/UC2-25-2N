/*
const primeiroNumero1 = 3
const segundoNumero1 = 4
console.log(primeiroNumero1+segundoNumero1)

const primeiroNumero2 = 3
const segundoNumero2 = 5
const terceiroNumero2 = 2
console.log((primeiroNumero2*segundoNumero2)/terceiroNumero2)

const primeiroNumero3 = 5
const segundoNumero3 = 4
const terceiroNumero3 = -1
console.log((primeiroNumero3-segundoNumero3)*terceiroNumero3)

const primeiroNumero4 = 234
const segundoNumero4 = 5
console.log(primeiroNumero4%segundoNumero4)

console.log("1"==="2") //false, são diferentes
console.log("1"==="1") //true, são iguais
console.log(2 === "2") //false, tipos diferentes

console.log("1"!=="2") //true, são diferentes
console.log("1"!=="1") //false, são iguais
console.log(2 !== "2")//true, tipos diferentes

console.log(1>2) //false, porque 1 é menor que 2
console.log(2>2) //false, porque 2 é igual a 2
console.log(3>2) //true, porque 3 é maior que 2 \n

console.log (1>=2) //false
console.log(2>=2) //true
console.log(3>=2) //true

console.log(1<2) //true
console.log(2<2) //false
console.log(3<2) //false

console.log(1<=2) //true
console.log(2<=2) //true
console.log(3<=2) //false
*/
let valorUm = prompt("Escolha um primeiro número")
let valorDois = prompt("Escolha o segundo número")

let valorUmN = Number(valorUm)
let valorDoisN = Number(valorDois)

// 1
console.log("O primeiro número é igual ao segundo?",valorUmN===valorDoisN)

//2
console.log("O primeiro número é diferente do segundo?",valorUmN!==valorDoisN)

//3
console.log("O primeiro número é maior que o segundo número",valorUmN>valorDoisN)

//4
console.log("O primeiro número é menor que o segundo",valorUmN<valorDoisN)