//1

let array //Cria a variável array
console.log('a. ', array) //Imprime a variável array, undefined

array = null //Define a variável como nula
console.log('b. ', array) //Imprime a variável array, null

array = [3,4,5,6,7,8,9,10,11,12,13] //Altera a lista da variável "array"
console.log('c. ', array.length) //Imprime c. 11

let i = 0 //Cria a variável "i" com o valor "0"
console.log('d. ', array[i]) //Imprime no console d. 3

array[i+1] = 19 //Altera o valor "4" na lista para "19"
console.log('e. ', array) // Imprime no console e. [3,19,5,6,7,8,9,10,11,12,13]

const valor = array[i+6] //Cria a variável "valor" com o valor "9"
console.log('f. ', valor) //Imprime f. 9

//2
const frase = prompt("Digite uma frase") //Abre uma caixa para o Usuário preencher

console.log(frase.toUpperCase().replaceAll("A","I"), (frase.length)) //Imprime a frase do usuário com todas as letras Maiúsculas e trocando o "A" pelo "I" além de imprimir o tamanho(Quantidade de letras, contando espaços)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"
//"SUBI NUM ÔNIBUS EM MIRROCOS" "27"

//3
const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")
const frase1 = `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`
console.log(frase1)

//4
let comidasFavoritas = ["Lasanha", "Pizza", "Hambúrguer", "Churrasco", "Batata Frita"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

const comidaUsuario = prompt("Qual sua comida favorita?")
comidasFavoritas[1] = comidaUsuario
console.log(comidasFavoritas)

//5
let listaDeTarefas = []
const tarefa1 = prompt("Diga uma tarefa que precise fazer:")
const tarefa2 = prompt("Diga outra tarefa:")
const tarefa3 = prompt("Agora a última:")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
const tarefaFeita = Number(prompt("Qual das três tarefas já finalizou? Digite o índice de 0, 1 ou 2."))
listaDeTarefas.splice(tarefaFeita, 1)
console.log(listaDeTarefas)