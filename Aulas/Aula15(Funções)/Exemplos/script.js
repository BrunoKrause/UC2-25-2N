function calculaArea(altura, largura){
    const area = altura * largura
    console.log(`A área do retângulo é ${area} m²`)
}

calculaArea(2,3)


//Declaração da função
function imprimirOlaMundo(){
    console.log('Olá Mundo!')
}

//Execução da função
imprimirOlaMundo()


const a = 1

function imprimirVariavel(){
    const b = 2
    console.log('varíavel a', a)
    console.log('variável b', b)
}

imprimirVariavel()
/*
console.log('varíavel a', a)
console.log('variável b', b)
*/

function calculaArea2(altura, largura){
    let area = altura*largura
    return area
}

let resultadoArea = calculaArea2(2,3)
console.log(resultadoArea)
console.log(calculaArea2(2,3))