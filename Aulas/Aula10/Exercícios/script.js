//1 
/*
const pokemon = prompt("Escolha o seu pokemon inicial(Bulbasaur, Charmander, Squirtle):")

switch (pokemon.toLowerCase()) {
    case 'bulbasaur':
        console.log('O seu pokemon é do tipo Planta e Veneno')
        break
    case 'charmander':
        console.log('O seu pokemon é do tipo Fogo')
        break
    case 'squirtle':
        console.log('O seu pokemon é do tipo Água')
        break;

    default:
        console.log('Pokemon não encontrado')
        break;
}
//2
const harryPoter = prompt("Digita um personagem de Harry Poter:")

switch(harryPoter.toLowerCase()){
    case 'hermione':
        console.log('Hermione(|Grifinória')
        break
    case 'ana':
        console.log('Ana(Lufa-lufa)')
        break
    case 'luna':
        console.log('Luna(Cornival')
        break
    case 'narcisa':
        console.log('Narcisa(Sonserina)')
        break
    case 'rowena':
        console.log('Rowena(Cornival')
        break
    case 'nymphadora':
        console.log('Nymphadora(Lufa-Lufa')
        break
    case 'pomona':
        console.log('Pomona(Lufa-Lufa')
        break
    case 'helga':
        console.log('Helga(Lufa-Lufa')
        break
    default:
        console.log('Personagem não encontrada.')
        break
}*/
//3
const ensinoMedio = prompt('Você possui o Ensino Médio concluído').toLowerCase() === 'sim'
const idade = Number(prompt('Qual a sua idade?')) >= 18
const faculdade = prompt('Você está cursando faculdade?').toLowerCase() === 'sim'

if(ensinoMedio && idade && !faculdade){
    console.log('Parabéns!! Você está apto para ingressar em uma faculdade')
} else
    console.log('Infelizmente você não pode ingressar. Analise os requisitos e tente novamente.')