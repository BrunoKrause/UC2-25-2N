//Determina Monstro
function determinaMonstro (par1, par2, par3, par4){
    //temPeleGelada(par1), transformaComLuaCheia(par2), bilhaAoSol(par3), temSedeDeSangue(par4)
    if(par1 && par3 && par4 && (par2 === false)){
        console.log('Vampiro')
    } else if(par2 && (par1 && par3 && par4) === false){
        console.log('Lobisomem')
    } else if((par1 && par2 && par3 && par4) === false){
        console.log('Humano')
    } else{
        console.log('Baranga')
    }
    
}
determinaMonstro(true, false, true, true)
determinaMonstro(false, true, false, false)
determinaMonstro(false, false, false, false)


//1
function minhaFuncao(variavel) {
    return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

//A. O que vai ser impresso no console? (10) e (50)
//B. O que aconteceria se retirasse os dois console.log e simplesmente invocasse a minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? (Daria erro e não apareceria nada, pois não há comando para imprimir.)

//2
let textoDoUsuario = prompt('Insira um texto')

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes('cenoura')
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//A. Explique o que essa função faz e qual é sua utilidade: (Esta função retorna em "true" ou "false" se o texto digitado possui a palava cenoura escrita).
/*B. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
                        i. Eu gosto de cenoura (True)
                        ii. CENOURA é bom pra vista (True)
                        iii. Cenouras crescem na terra (True)
*/

//Exercícios de escrita
//1
function texto(){
    console.log('Eu sou Bruno, tenho 20 anos, moro em São Leopoldo, trabalho e estudo.')
}

texto()

//2
//A
const somaAt2 = (num1, num2) =>{
    return num1 + num2
}
console.log(soma(10, 50))

//B
const maiorIgual = (num1, num2) =>{
    return num1>=num2
}
console.log(maiorIgual(50,10))

//C
function numPar (num) {
    return num%2===0
}
console.log(numPar(19))

//D
function string (texto){
    const mensagem = (texto.lenght, texto.toUpperCase())
    return mensagem
}
console.log(string)


//3
const num1 = Number(prompt('Insira um número'))
const num2 = Number(prompt('Insira outro número'))

function soma (num1, num2) {
    return ('Soma:', num1+ num2)
}
console.log(soma(num1,num2))

function diferenca (num1, num2){
    if (num1 >= num2){
        return ('Diferença:', num1 - num2)
    } else if (num1 < num2){
        return ('Diferença:', num2 - num1)
    }
}
console.log(diferenca(num1, num2))

function multiplicacao (num1, num2){
    return ('Multiplicação:', num1*num2)
}
console.log(multiplicacao(num1, num2))

function divisao (num1, num2) {
    if(num1>=num2){
        return ('Divisão:', num1/num2)
    } else if(num1<num2){
        return ('Divisão:', num2/num1)
    }
}
console.log(divisao(num1, num2))