let idade = prompt("Qual a sua idade?")
const idadeN = Number(idade)
let idadeAmigo = prompt("Quantos anos tem seu melhor amigo ou melhor amiga?")
const idadeAmigoN = Number(idadeAmigo)

console.log("Sua idade é maior que a do seu melhor amigo?",idadeN>idadeAmigoN)
console.log("A diferença de idades é:",idadeN-idadeAmigoN)