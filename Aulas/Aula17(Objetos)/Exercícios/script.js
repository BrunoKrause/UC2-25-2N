//1
const filme = {
    nome : 'Avatar',
    lancamento : '2009',
    assistiu : "Sim",
    diretor : 'James Cameron'
}

console.log(filme.nome, filme.lancamento)
console.log(filme["assistiu"], filme["diretor"])
//2
const pessoa = {
    nome : 'Felipe',
    idade : 16,
    generoMusicalFavorito : 'Sertanejo'
}

console.log(`O nome da pessoa é ${pessoa.nome}, tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalFavorito}.`)
//3
filme.elenco = ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Kate Wislet']
filme.personagens = ['Jake Sully', 'Neytiri', 'Kiri, Dr.Grace', 'Ronal']
console.log(`O ator/atriz ${filme.elenco[0]} fez o personagem ${filme.personagens[0]}.`)

filme.elenco[0] = 'Xuxa'

console.log(filme)

//4
function novaPessoa (objeto){
    const novoObjeto = {
        ...objeto,
        comidasFavoritas : ['Strogonoff de Carne', 'Churrasco', 'Xis tudo', 'ã', 'Lasanha'],
        melhorAmigo : {
            nome : 'Henrique',
            idade : 16
        }
    }
    console.log(`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasFavoritas[0]}, ${novoObjeto.comidasFavoritas[1]}, ${novoObjeto.comidasFavoritas[2]}, ${novoObjeto.comidasFavoritas[3]} e ${novoObjeto.comidasFavoritas[4]}. Seu melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`)
}
novaPessoa(pessoa)


//5
 const arrayNaruto = [
    {nome:'Naruto Uzumaki',idade:12,estilo:'Vento',jutsus:['Taijutsu', 'Ninjutsu']},
    {nome:'Kakashi Hatake',idade:26,estilo:'Raio',jutsus:['Atemi','Chidori','Cilada']},
    {nome:'Gaara',idade:12,estilo:'Areia',jutsus:['Armadura de Areia', 'Caixão de Areia', 'Chuva de Areia']}
 ]

 function adicionarPersonagem(nomePersonagem, idadePersonagem, estiloPersonagem, jutsusPersonagem){
    let novoPersonagem = {nome:nomePersonagem,idade:idadePersonagem,estilo:estiloPersonagem,jutsus:jutsusPersonagem}
    arrayNaruto.push(novoPersonagem)
    console.log(arrayNaruto)
 }

 function buscarPersonagem(nomePersonagem){
    let teste = true
    while(teste){
        for( let i = 0; i< arrayNaruto.length; i++){
            if((arrayNaruto[i].nome).includes(nomePersonagem)){
                console.log(arrayNaruto[i].nome,arrayNaruto[i].idade,arrayNaruto[i].estilo,arrayNaruto[i].jutsus)
                teste = false
            }
        }
        if(teste){
            console.log(`Infelizmente não foi possível encontrar o personagem ${nomePersonagem}.`)
            teste = false
        } 
    }
}

 buscarPersonagem('Kakashi')

 function listarPersonagens(){
    for(let i = 0; i<arrayNaruto.length; i++){
        console.log(arrayNaruto[i].nome,arrayNaruto[i].idade,arrayNaruto[i].estilo,arrayNaruto[i].jutsus)
    }
 }
listarPersonagens()