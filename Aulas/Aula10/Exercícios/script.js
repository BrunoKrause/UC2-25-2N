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