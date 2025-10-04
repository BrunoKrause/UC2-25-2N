let firstNumber = prompt("Cheese a number")
let secondNumber = prompt("Cheese other number")
const fNN = Number(firstNumber)
const sNN = Number(secondNumber)
const restoDivisao1 = fNN%sNN
const restoDivisao2 = sNN%fNN

console.log("O primeiro número é maior que o segundo?",fNN>sNN)
console.log("O primeiro número é igual ao segundo",fNN==sNN)
console.log("O primeiro número é divisível pelo segundo?",restoDivisao1==0)
console.log("O primeiro número é divisível pelo primeiro?",restoDivisao2==0)