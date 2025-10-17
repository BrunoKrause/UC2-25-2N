const escolhaUsuario = prompt('Digite qual você vai colocar (Pedra, Papel, Tesoura, Lagarto, Spock')
const choices = ["Pedra","Papel","Tesoura","Lagarto","Spock"]
const escolhaComputador = choices[Math.floor(Math.random()*5)];
console.log("Você escolheu:",escolhaUsuario,"  O computador escolheu:",escolhaComputador)
const pedra = 'Pedra' > 'Tesoura' && 'Lagarto'
const papel = 'Papel' > 'Pedra' && 'Spock'
const tesoura = 'Tesoura' > 'Papel' && 'Lagarto'
const lagarto = 'Lagarto' > 'Spock' && 'Papel'
const spock = 'Spock' > 'Pedra' && 'Tesoura'
const resultado = [pedra,papel,tesoura,lagarto,spock]

switch(resultado)