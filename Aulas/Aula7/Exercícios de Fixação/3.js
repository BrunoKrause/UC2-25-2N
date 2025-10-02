let idade = prompt("Qual a sua idade?")
const idadeN = Number(idade)
const ano = 365
const mes = 30
const dia = 24

console.log("Sua idade em meses:",idadeN*ano)
console.log("Sua idade em dias",(idadeN*ano)*mes)
console.log("Sua idade em horas:",[(idadeN*ano)*mes]*dia)
