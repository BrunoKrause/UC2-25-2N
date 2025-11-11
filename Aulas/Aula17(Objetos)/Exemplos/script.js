const professor ={
    nome:'Lucas',
    idade:33,
    email:'lucas.g.f.alves@gmail.com'
}

console.log(professor.nome, professor.idade, professor.email)
professor.idade = 32
console.log(professor.idade)
professor.tarefas = ['Dar aula','Responder dúvidas']
console.log(professor.tarefas)
console.log(professor)

const laptop = {
    tela : 15,
    processador : 'Ryzen',
    marca : 'Lenovo',
    modelo : 'K14'
}

console.log(`A marca do Laptop é ${laptop.marca}`)

const professores = [
    {nome:'Lucas', modulo:2},
    {nome:'Dal', modulo:1},
    {nome:'Valter', modulo:1}
]
console.log('O professor:', professores[0].nome, 'deu o módulo', professores[0].modulo)