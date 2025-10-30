//Contador Simples:
for(let i=1; i<=10; i++){console.log(`O número é ${i}`)}

//Contador de Pares:
for(let i=1; i<=20; i++){
    if(i%2===0){
    console.log(`O número ${i} é par`)}}

//Tabuada:
const numeroTabuada = Number(prompt('Digite um número:'))

for(let i=1; i<=10; i++){
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada*i}`)
}

//Soma dos Números:
let soma = 0
for(let i=0; i<5; i++){
    let numeroSoma = Number(prompt('Digite um número'))
    soma += numeroSoma
}
console.log(soma)

//Média de notas:
let somaNotas = 0

for(let i=1; i<=5; i++){
    let nota = Number(prompt(`Digite a nota do aluno ${i}:`))
    somaNotas += nota
}
console.log(`A média das notas é ${somaNotas/5}`)

//Jogo da Forca:
/*
const palavras = ['banana','maça','abacaxi','morango','kiwi','manga','limao']
let palavraRandom = palavras[Math.floor(Math.random()*palavras.length())]

for(let numeroTentativas = 0; numeroTentativas<6){
    
}*/

//Validador de CPF:
