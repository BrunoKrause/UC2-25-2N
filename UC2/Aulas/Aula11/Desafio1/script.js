const escolhaUsuario = prompt('Digite qual você vai colocar (Pedra, Papel, Tesoura, Lagarto, Spock')
const choices = ["Pedra","Papel","Tesoura","Lagarto","Spock"]
const escolhaComputador = choices[Math.floor(Math.random()*5)];
console.log("Você escolheu:",escolhaUsuario,"  O computador escolheu:",escolhaComputador)
/*const pedra = 'Pedra' > 'Tesoura' && 'Lagarto'
const papel = 'Papel' > 'Pedra' && 'Spock'
const tesoura = 'Tesoura' > 'Papel' && 'Lagarto'
const lagarto = 'Lagarto' > 'Spock' && 'Papel'
const spock = 'Spock' > 'Pedra' && 'Tesoura'*/

switch(escolhaUsuario.toLowerCase()){
    case 'pedra':
        if(escolhaComputador === ('Tesoura' || 'Lagarto')){
            console.log("Venceu")
        } else if(escolhaComputador === ('Papel' || 'Spock')){
            console.log('Perdeu')
        } else{
            console.log('Empate')
        }
        break
    case 'papel':
        if(escolhaComputador === ('Pedra' || 'Spock')){
            console.log('Venceu')
        } else if(escolhaComputador === ('Lagarto' || 'Tesoura')){
            console.log('Perdeu')
        } else{
            console.log('Empate')
        }
        break
    case 'tesoura':
        if(escolhaComputador === ('Papel' || 'Lagarto')){
            console.log('Venceu')
        } else if(escolhaComputador === ('Pedra' || 'Spock')){
            console.log('Perdeu')
        } else{
            console.log('Empate')
        }
        break
    case 'lagarto':
        if(escolhaComputador === ('Spock' || 'Papel')){
            console.log('Venceu')
        } else if(escolhaComputador === ('Tesoura' || 'Pedra')){
            console.log('Perdeu')
        } else{
            console.log('Empate')
        }
        break
    case 'spock':
        if(escolhaComputador === ('Pedra' || 'Tesoura')){
            console.log('Venceu')
        } else if(escolhaComputador === ('Lagarto' || 'Papel')){
            console.log('Perdeu')
        } else{
            console.log('Empate')
        }
        break
    default:
        console.log('Erro')
        break
}

