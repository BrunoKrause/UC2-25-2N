//0
let condicao1 = true

if (condicao1){
    console.log('Entrei no if 1!')
}

let condicao2 = false

if (condicao2){
    console.log('Entrei no if 2!')
}
/*
//1
const num1 = Number(prompt("Insira um número:"))
const num2 = Number(prompt("Insira outro número:"))
 let comparacao = num1 === num2
 if(comparacao){
    console.log('Parabéns, conseguiu digitar o mesmo número!!')
 } 
 else {
    console.log('Burro, os número são diferentes.')
 }

let condicao3 = false
 if(condicao1){
    console.log('Entrou no if 1!')
 } else if(condicao2){
    console.log('Entrou no else if 1"')
 } else if(condicao3){
    console.log('Entrou no else if 2!')
 }
 else
    console.log('Entrou no ELSE')


const num1 = Number(prompt("Passa um número"))
const num2 = Number(prompt("Passa outro"))

const maior = num1 > num2
const menor = num1 < num2
const igual = num1 === num2

if(maior){
    console.log("O primeiro número é maior que o segundo.")
} else if(menor){
    console.log("O primeiro número é menor que o segundo")
} else if(igual){
    console.log("Os números são iguais.")
}*/

const paisDeOrigem = prompt('Qual o seu país de origem?')
switch (paisDeOrigem.toLowerCase()) {
    case 'brasil':
        console.log('Brasileiro')
        break;
    case 'eua':
        console.log('Norte Americano')
        break
    case 'inglaterra':
        console.log('Inglês')
         break
    case 'frança':
        console.log('Francês')
        break
    case 'itália':
        console.log('Italiano')
        break
    case 'canadá':
        console.log('Canadense')
        break

    default:
        console.log('Nacionalidade não encontrada.')
        break;
} 
