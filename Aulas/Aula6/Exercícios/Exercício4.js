let nome 
let idade 
console.log(typeof(nome),typeof(idade)) // Undefined, pois estão sem valores atribuídos

nome = prompt("Qual o nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof(nome),typeof(idade)) // string e string

console.log("Olá",nome,"você tem",idade,"anos")