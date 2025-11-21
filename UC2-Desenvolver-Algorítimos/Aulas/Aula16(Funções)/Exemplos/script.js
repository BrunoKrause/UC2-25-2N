//Expressões de Função
const calculaArea = function(altura, largura){
    const area = altura * largura
    return area
}

const areaCalculada = calculaArea(2,3)

//Arrow Functions
const calculaArea2 = (altura, largura) =>{
    const area = altura * largura
    return area
}

const areaCalculada2 = calculaArea2(2,3)

//Refazendo exercícios :(
const soma = function(){
    const num1 = 5
    const num2 = 6
    const resultado = num1 + num2
    console.log(`A soma é ${resultado}`)
}
soma()

const dobro = () => {
    const num = 10
    const resultado = num*2
    console.log(`O dobro de ${num} é ${resultado}`)
}

dobro()