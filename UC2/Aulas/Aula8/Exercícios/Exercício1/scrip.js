const nome = prompt("Qual o seu nome?")
const corFavorita = prompt("Qual a sua cor favorirta?")
let resposta = "A cor favorita de " + nome + " é " + corFavorita
console.log(resposta)

resposta = `A cor favorita de ${nome} é ${corFavorita}`
console.log(resposta)