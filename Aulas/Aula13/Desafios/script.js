//1

const numeroPessoa = Number(prompt("A primeira pessoa digita um número:"))
let numeroTentativas = 0
let numeroChutado = 0

console.log('Vamos Jogar!')

do{
    numeroChutado = Number(prompt('Tente advinha o número digitado:'))
    if(numeroPessoa>numeroChutado){
        console.log(`O número chutado é: ${numeroChutado}. Errrrou, é maior`)
    } else if(numeroPessoa<numeroChutado){
        console.log(`O número chutado é: ${numeroChutado}. Errrrou, é menor`)
    }
    numeroTentativas++
    console.log(`O número chutado foi ${numeroChutado}. Acertoooou!!! Em ${numeroTentativas} tentativas.`)
} while(numeroPessoa !== numeroChutado){
    
}


//2
let numeros = Array.from({length: 10}, (_, i) => i + 1);

const numeroRamdom = numeros[Math.floor(Math.random()*10)]
let numeroTentativas2 = 0
let numeroChutado2 = 0

console.log('Vamos Jogar!')

do{
    numeroChutado2 = Number(prompt('Tente advinhar o número gerado:'))
    if(numeroRamdom>numeroChutado2){
        console.log(`O número chutado é: ${numeroChutado2}. Errrrou, é maior`)
    } else if(numeroRamdom<numeroChutado){
        console.log(`O número chutado é: ${numeroChutado2}. Errrrou, é menor`)
    }
    numeroTentativas2++
} while(numeroRamdom !== numeroChutado2){
    
}
console.log(`O número chutado foi ${numeroChutado2}. Acertoooou!!! Em ${numeroTentativas2} tentativas.`)