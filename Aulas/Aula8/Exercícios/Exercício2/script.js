const fraseU = prompt("Escreva uma frase")
const fraseM = fraseU.toUpperCase()
const fraseI = fraseU.replaceAll("o","i")

console.log(fraseM)
console.log(fraseI)
console.log("A frase tem " + fraseU.length + " caracteres")