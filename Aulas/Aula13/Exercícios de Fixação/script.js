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