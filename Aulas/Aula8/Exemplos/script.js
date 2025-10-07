//Concatenação (Sem diferença usar aspas simples ou duplas)
const nome = "Bruno"
const idade = 20
let frase = "Meu nome é " + nome + " e tenho " + idade + " anos" //necessário colocar o espaço para separar as palavras
console.log(frase)
console.log(typeof frase)

//Template
nome
idade
frase = `Meu nome é ${nome} e tenho ${idade} anos`
console.log(frase)
console.log(typeof frase)

//Propriedades

//Length
console.log(nome.length)
console.log(frase.length)


//Métodos

//toLoweCase()
const fraseMaiuscula = "OieEEeEE"
const fraseMinuscula = fraseMaiuscula.toLowerCase()
console.log(fraseMaiuscula, fraseMinuscula)

//toUpperCase()
const fraseUpper = fraseMinuscula.toUpperCase()
console.log(fraseMinuscula, fraseUpper)

//trim()
const email = " brunonoia05@gmail.com"
console.log(email.trim())

//includes(caracteres)
const fraseCenoura = "Hoje comi cenoura, adoro cenoura"
console.log(fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

//replaceAll(chars1, chars2)
const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
console.log(novaFrase)


//Arrays
const listaDeCompras = ["Abacate","Banana","Tomate"]
console.log(listaDeCompras)