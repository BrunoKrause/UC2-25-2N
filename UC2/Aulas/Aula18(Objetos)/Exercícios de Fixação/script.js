//Exercícios de Interpretação de Código
//1
const filme = {
    nome: 'Auto da Compadecida',
    ano: 2000,
    elenco: [
        'Matheus Nachtergaele', 'Selton Mello', 'Denise Fraga', 'Virginia Cavendish'
    ],
    transmissoeshoje: [
        {canal: 'Telecine', horario: '21h'},
        {canal: 'Canal Brasil', horario:'19h'},
        {canal: 'Globo', horario: '14h'}
    ]
}

console.log(filme.elenco[0]) //Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
console.log(filme.transmissoeshoje[2]) //{canal: 'Globo', horario: '14h}

//A o que vai ser impresso no console?

//2
const cachorro = {
    nome: 'Juca',
    idade: 3,
    raca: 'SRD'
}

const gato = {...cachorro, nome: 'Juba'}

const tartaruga = {...gato, nome: gato.nome.replaceAll('a', 'o')}

console.log(cachorro)//{nome: 'Juca', idade: 3, raca: 'SRD'}
console.log(gato)//{nome: 'Juba', idade: 3, raca: 'SRD'}
console.log(tartaruga)//{nome: 'Jubo', idade: 3, raca: 'SRD'}

//A. O que vai ser impresso no console?
//B. O que faz a sintaxe dos três pontos antes do nome de um objeto? (Pega as informações do objeto selecionado, colando em um novo objeto)

//3
function minhaFuncao (objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {
    nome: 'Caio',
    idade: 23,
    backender: false
}

console.log(minhaFuncao(pessoa, "backender"))//false
console.log(minhaFuncao(pessoa, "altura"))//undefined

//A. O que vai ser impresso no console?
//B. Explique o valor impresso no console. Você saber por que isso aconteceu? (Pois não existe a variável 'altura' dentro do objeto pessoa)

//Exercícios de Escrita de Código
//1.Resolva os passo a seguir:
//A
const pessoa1 = {
    nome: 'Gabriel',
    apelidos: ['Biel', 'Gabi', 'Gabs']
}

function imprimirPessoa (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}.`)
}
imprimirPessoa(pessoa1)

//B
const pessoa2 = {
    ...pessoa1,
    apelidos: ['Dumbo', 'Radar', 'Asa de Avião']
}
imprimirPessoa(pessoa2)


//2
//A
const objeto1 = {
    nome: 'Lionel Messi',
    idade: 38,
    profissao: 'Jogador de Futebol'
}

const objeto2 = {
    ...objeto1,
    nome: 'Neymar',
    idade: 33,
    profissao: 'Influencer'
}

//B
function arrayObjetosF (objeto){
    let arrayObjetos = []
    arrayObjetos.push(objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length)
    return arrayObjetos
}
console.log(arrayObjetosF(objeto1))
console.log(arrayObjetosF(objeto2))


//3
//A
const carrinho = []

//B
const fruta1 = {
    nome: 'Maçã',
    disponibilidade: true
}

const fruta2 = {
    ...fruta1,
    nome: 'Banana'
}

const fruta3 = {
    ...fruta2,
    nome: 'Morango'
}

//C
function frutas (fruta) {
    carrinho.push(fruta)
}
frutas(fruta1)
frutas(fruta2)
frutas(fruta3)

console.log(carrinho)