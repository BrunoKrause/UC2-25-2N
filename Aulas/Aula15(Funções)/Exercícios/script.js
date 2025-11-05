//Funções sem parâmetros
//1
function bemVindoTurma(){
    console.log('Bem vindo Turma 25-2N')
}
bemVindoTurma()


//2
function somas(){
    const num1 = 5
    const num2 = 4
    const resultado = num1+num2
    console.log(`A soma dos números é igual a ${resultado}`)
}

somas()


//3
function dobro(){
    const num = 10
    const numDobrado = num*2
    console.log(`O dobro de ${num} é ${numDobrado}`)
}

dobro()

//Funções com parâmetros e argumentos
//1
const nomes = ['Bruno','Eduardo', 'Felipe']
function imprimirNomes(nomes){
    console.log(`Olá ${nomes}`)
}

for(let nome of nomes){
    imprimirNomes(nome)
}

//2
function soma(num1,num2){
    const resultado = num1+num2
    console.log(`A soma é ${resultado}`)
}

soma(10,7)

//Funções com array
//1
function soma2(num1,num2){
    let resultado = num1+num2
    return resultado
}
const armResultado = soma2(5,7)
console.log(armResultado)

//2
const numeros = [100,200,300,400]
function funNum(numeros){
    //let arrayDiv = [numeros[0]/2, numeros[3]/2]
    let arrayDiv = []
    arrayDiv.push(numeros[0]/2)
    arrayDiv.push(numeros[3]/2)
    return arrayDiv
}
const arrayDiv = funNum(numeros)
console.log(arrayDiv) 