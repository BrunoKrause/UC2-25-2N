//1
function informacoesUsuario () {
    const pessoa = {
        nome: prompt('Qual o seu nome?'),
        idade: Number(prompt('Quantos anos você tem?')),
        profissao: prompt('Com o que você trabalha?')
    }
    console.log(pessoa)
    console.log(typeof(pessoa))
}
informacoesUsuario()

//2
function comparacaoFilmes (filme1, filme2) {
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento === filme2.lancamento}`)
}
const movie1 = {
    nome: 'Avatar',
    lancamento: 2009
}
const movie2 = {
    nome: 'Titanic',
    lancamento: 1997
}
comparacaoFilmes(movie1,movie2)

//3
const carrinho = []
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

function frutas (fruta) {
    carrinho.push(fruta)
}

function controleFrutas (fruta) {
    const temFruta = fruta.disponibilidade
    console.log(!temFruta)
}

frutas(fruta1)
frutas(fruta2)
frutas(fruta3)
console.log(carrinho)

controleFrutas(fruta2)

//4
const historia1 = {
    nome: 'Martin Luther King Jr.',
    dataNascimento: '15 de Janeiro de 1929',
    descricao: 'Foi um pastor batista e ativista político estadunidense que se tornou a figura mais proeminente e líder do movimento dos direitos civis nos Estados Unidos de 1955 até seu assassinato em 1968',
    regiao: 'Geórgia/EUA',
    cantar : () =>{
        console.log('Música: Pride(In the Name of Love')
        console.log('Trecho:  "De manhã cedo, quatro de abril / Um tiro ecoa no céu de Memphis"')
    }
}
const historia2 = {
    nome: 'Albert Einstein',
    dataNascimento: '14 de Março de 1879',
    descricao: 'Foi um físico teórico alemão que desenvolveu a teoria da relatividade geral, um dos pilares da física moderna ao lado da mecânica quântica.',
    regiao: 'Ulm/Alemanha',
    cantar : () =>{
        console.log('Música: Einstein de Kelly Clarkson')
        console.log('Trecho: Todas as suas promessas mais / Mil desculpas apenas / Tiram a dor e então elas nos deixam / Com absolutamente nada, não, absolutamente nada')
    }
}
const historia3 = {
    nome: 'Alexandre Magno',
    dataNascimento: 'Julho de 356 a.C.',
    descricao: 'Foi rei do reino grego antigo da Macedônia e um membro da dinastia argéada. Nascido em Pela em 356 a.C., o jovem príncipe sucedeu a seu pai, o rei Filipe II, no trono com vinte anos de idade.',
    regiao: 'Pela(Macedônia)',
    cantar : () =>{
        console.log('Música: Alexandre de Caetano Veloso')
        console.log('Trecho: Ele escolheu seu cavalo / Por parecer indomável / E pôs-lhe o nome Bucéfalo ao domina-lo / Para júbilo, espanto e escândalo do seu próprio pai')
    }
}

let personagensHistoricos = []
personagensHistoricos.push(historia1, historia2, historia3)

function exibirConsciencia() {
    for(let i = 0 ; i<personagensHistoricos.length; i++){
        console.log(personagensHistoricos[i].cantar())
    }
}
exibirConsciencia()