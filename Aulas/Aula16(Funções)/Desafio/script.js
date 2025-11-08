//1
const arrow = (parametro) => {
    console.log(parametro)
}

const funFun = (num1, num2) => {
    const soma = num1 + num2
    arrow(soma)
}

funFun(10,20)

//2
let inventario = []

function adicionarItem (inventario2, item) {
    if(inventario2.length>=5){
        console.log('Infelizmente o inventário está cheio.')
    } else if(inventario2.length<5){
        inventario2.push(item)
    }
}

adicionarItem(inventario, )

function removerItem (inventario, item) {
    if(inventario.toLowerCase().includes(item)){
        inventario.splice(inventario.indexOf(item), 1)
    } else if(inventario.toLowerCase().includes(item)===false){
        console.log('Não existe', item, 'no seu inventário.', inventario)
    }
}

function listarItens (inventario) {
    if(inventario.length>0){
        console.log(inventario)
    } else if(inventario.length=0){
        console.log('O seu inventário está vazio, adicione itens.')
    }
}