const generoFilme = prompt('Digite o gênero do filme (Drama, Comédia, Terror, Ação, Romance, Ficçao Científica ou Fantasia):')
const valorIngresso = Number(prompt('Qual o valor do ingresso?'))
const assistirFilme = (generoFilme.toLowerCase() === 'fantasia' && valorIngresso <= 15)
console.log(assistirFilme)

if(assistirFilme){
    const lanchinho = prompt('O que você vai comprar? (Pipoca, Chocolate, Doces, etc)')
    console.log(`Bom filme!`)
    console.log(`Aproveite o seu ${lanchinho}.`)
} else {
    console.log('Escolha outro filme :(')
}