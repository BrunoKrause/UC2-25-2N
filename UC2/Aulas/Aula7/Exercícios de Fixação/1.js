const bool1 = true //atribuído o valor true
const bool2 = false //atribuído o valor false
const bool3 = !bool2 //atribuído o valor contrário da variável bool2(true)

let resultado = bool1 && bool2 //comparando as duas variáveis, caso iguais true, neste caso false
console.log("a.",resultado) //impresso no console o valor false

resultado = bool1 && bool2 && bool3 //comparando as variáveis
console.log("b.",resultado) //impresso no console o valor false

resultado = !resultado && (bool1 || bool2)
console.log("c.",resultado) //impresso no console o valor true

console.log("d.", typeof resultado) //imprime no console o tipo da variável "resultado"