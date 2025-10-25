/*
let i = 0 //começo

while(i <= 9){ //Enquanto a condição for verdade, que no caso é o i <= 9
    console.log("Loop:", i) //executa console.log
    i++ //incrementa o iterador
}
console.log("Chegou ao final do código")
*/
/*
let estomago = 0 //Começo/Iterador

while(estomago < 100){
    console.log("Quero comer mais coxinhas", estomago)
    estomago += 10
}*/
/*
let i
let resultado = 0

while(i !== 0){
    i = Number(prompt("Digite um número:"))
    resultado += i
}
console.log(`O resultado é: ${resultado}`)*/
/*
let c = 1

do{
    console.log('O valor de C é:', c)
    c++
}while(c <= 6)*/
/*
const numeros = [14,67,89,15,23]

for(let i=0; i < 5; i++){
    const elemento = numeros[i]
    console.log(elemento)
}*/

const array = [11, 15, 18, 14, 12, 13]
let maiorNumero = 0

for(let i=0; i<6; i++){
    if(maiorNumero<array[i]){
        maiorNumero=array[i]
    }
}
console.log(`O maior número é: ${maiorNumero}`)
