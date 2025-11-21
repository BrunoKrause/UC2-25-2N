const idade = prompt("Qual a sua idade?")
console.log(typeof(idade))
const idadeNumber = Number(idade)
console.log(typeof(idadeNumber))
// Number() conversor de string para number
const idadeTexto = idadeNumber.toString()
console.log(typeof(idadeTexto))
//.toString conversor de number para string