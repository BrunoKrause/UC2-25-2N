//1
let valor = 0
for(let i=0; i<5; i++){
    valor += i
}
console.log(valor)

//O que o código está fazendo?(Criando a variável valor e também criando a variável "i", e acrescentando os valores de 'i' em 'valor'.) Qual o resultado impresso no console? (10)

//2
const lista = [10,11,,12,15,18,19,21,23,25,27,30]

for(let numero of lista){
    if(numero>18){
        console.log(numero)
        console.log(lista.indexOf(numero))
    }
}
//A.O que vai ser impresso no console? (O numero que for maior que 18)
//B.Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado ser usado para fazer isso? (Sim, é suficiente, apenas é necessário usar o comando .indexOf())

//3
const quantidadeTotal = Number(prompt('Digite a quantidade de linhas:'))
let quantidadeAtual = 0
while(quantidadeAtual<quantidadeTotal){
    let linha = ""
    for(let asteriscos = 0; asteriscos<quantidadeAtual + 1; asteriscos++){
        linha += "*"
    }
    console.log(linha)
    quantidadeAtual++
}
//Qual seria o resultado impresso no console, se o usuário digitasse o número 4? (****)

//Exercícios de Escrita

//1
const quantidadeBichinhosEstimação = Number(prompt('Digite quantos bichinhos de estimação você tem:'))
let arrayBichinhos = []

if(quantidadeBichinhosEstimação === 0){
    console.log('Que pena! Você pode adotar um pet!')
} else {
    for(let i = 0; i<quantidadeBichinhosEstimação; i++){
        const nomeBichinhos = prompt('Qual o nome do seu bichinho?')
        arrayBichinhos.push(nomeBichinhos)
    }
}
console.log(arrayBichinhos)

//2
const arrayOriginal = [100,200,35,56,50,70,367,286]

//A
for(let numero of arrayOriginal){
    console.log(numero)
}

//B
for(let i=0; i<8; i++){
    if(arrayOriginal[i]%10 === 0){
        console.log(arrayOriginal[i])
    }
}

//C
let arrayParesOriginal = []

for(let numeroPar of arrayOriginal){
    if(numeroPar%2 === 0){
        arrayParesOriginal.push(numeroPar)
    }
}
console.log(arrayParesOriginal)

//D
const arrayString = ['10','20','30','40','50']

for(let numeroString of arrayString){
    console.log(`O elemento do index ${arrayString.indexOf(numeroString)} é: ${numeroString}`)
}

//E
let maiorNumeroOriginal = 0
let menorNumeroOriginal = 100000

for(let maiorMenor of arrayOriginal){
    if(maiorNumeroOriginal<maiorMenor){
        maiorNumeroOriginal = maiorMenor
    } else if(menorNumeroOriginal>maiorMenor){
        menorNumeroOriginal = maiorMenor
    }
}
console.log(`O maior número do array é ${maiorNumeroOriginal} e o menor número é ${menorNumeroOriginal}`)