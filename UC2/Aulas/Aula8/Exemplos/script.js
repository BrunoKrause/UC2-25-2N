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

//length
const pokemon = ["Bulbassauro","Squirtle","Kadabra","Charmander","Farfetch"]
console.log(pokemon.length)

//.includes()
const seriesBoas = ["Vikings", "The Big Bang Theory"]
console.log(seriesBoas.includes("Vikings"), seriesBoas.includes("GOT"))

//push(elemento)
const numeros = [1,2,3]
numeros.push(4)
console.log(numeros)
numeros.push(5,6,7)
console.log(numeros)

//pop()
const meusPeixes = ["Palhaço","Mandarim","Esturjão"]
meusPeixes.pop()
console.log(meusPeixes)
meusPeixes.pop()
console.log(meusPeixes)

//splice(i,n)
// O método splice(i,n) remove n(n representa a quantidade) elementos à partir da posição i do array.

const letras = ["A","B","C","D","E","F","G","H"]
letras.splice(2,1)
console.log(letras)
letras.splice(3,2)
console.log(letras)