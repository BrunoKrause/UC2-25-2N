const filme = {
    nome : 'Avatar',
    lancamento : '2009',
    assistiu : "Sim",
    diretor : 'James Cameron'
}

console.log(filme.nome, filme.lancamento)
console.log(filme["assistiu"], filme["diretor"])

const pessoa = {
    nome : 'Felipe',
    idade : 16,
    generoMusicalFavorito : 'Sertanejo'
}

console.log(`O nome da pessoa é ${pessoa.nome}, tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito}.`)

filme.elenco = ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Kate Wislet']
filme.personagens = ['Jake Sully', 'Neytiri', 'Kiri, Dr.Grace', 'Ronal']
console.log(`O ator/atriz ${filme.elenco[0]} fez o personagem ${filme.personagens[0]}.`)

filme.elenco[0] = 'Xuxa'

console.log(filme)