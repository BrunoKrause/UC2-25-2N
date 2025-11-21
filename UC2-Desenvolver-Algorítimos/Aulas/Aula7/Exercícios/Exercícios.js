const a = true
const b = false
const c = true

/* Exercícios operador && (E)
const resultado1 = a&&b
const resultado2 = b&&c
const resultado3 = a&&c
const resultado4 = a&&b&&c

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
*/

// Exercícios operador || (ou)
/*const resultado1 = a||b
const resultado2 = b||c
const resultado3 = a||c
const resultado4 = a||b||c

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(resultado4)
*/

let nome = prompt("Qual o seu nome?")
let anoDeNascimento = prompt("Em que ano você nasceu?")
const anoDeNascimentoN = Number(anoDeNascimento)
let anoAtual = prompt("Em que ano estamos?")
const anoAtualN = Number(anoAtual)

const idade = anoAtualN-anoDeNascimentoN

console.log("Nome:",nome)
console.log("Idade:",idade)
console.log("É maior de idade?",idade>=18)
console.log("Idade em 2050:",2050-anoDeNascimentoN)