const nomeCompleto = prompt('Digite seu nome completo:')
const tipoDeJogo = prompt('Qual o tipo de jogo Internacional(IN) ou Doméstico(DO)?')
const etapaDoJogo = prompt('É jogo de Semi-final(SF), Disputa por terceiro lugar(DT) ou Final(FI)?')
const categoria = Number(prompt('Qual a categoria(1,2,3 ou4)?'))
const quantidadeIngressos = Number(prompt('Quantos ingressos?'))

console.log('Nome:', nomeCompleto)
console.log('Tipo de Jogo:',tipoDeJogo, 'Etapa:',etapaDoJogo, 'Categoria do(s) ingresso(s):',categoria, 'Quantidade:', quantidadeIngressos, 'ingressos.')
const dolar = 5.50

//Jogos domésticos Semi-final
if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='sf' && categoria===1){
    console.log('O valor do ingresso é R$1.320,00.')
    console.log(`O valor total é: R$${1320.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='sf' && categoria===2){
    console.log('O valor do ingresso é R$880,00.')
    console.log(`O valor total é: R$${880.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='sf' && categoria===3){
    console.log('O valor do ingresso é R$550,00.')
    console.log(`O valor total é: R$${550.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='sf' && categoria===4){
    console.log('O valor do ingresso é R$220,00.')
    console.log(`O valor total é: R$${220.00*quantidadeIngressos}`)
} 

//Jogos domésticos Terceiro Lugar
else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='dt' && categoria===1){
    console.log('O valor do ingresso é R$660,00.')
    console.log(`O valor total é: R$${660.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='dt' && categoria===2){
    console.log('O valor do ingresso é R$440,00.')
    console.log(`O valor total é: R$${440.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='dt' && categoria===3){
    console.log('O valor do ingresso é R$330,00.')
    console.log(`O valor total é: R$${330.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='dt' && categoria===4){
    console.log('O valor do ingresso é R$170,00.')
    console.log(`O valor total é: R$${170.00*quantidadeIngressos}`)
} 

//Jogos domésticos Final
else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='fi' && categoria===1){
    console.log('O valor do ingresso é R$1980,00.')
    console.log(`O valor total é: R$${1980.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='fi' && categoria===2){
    console.log('O valor do ingresso é R$1320,00.')
    console.log(`O valor total é: R$${1320.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='fi' && categoria===3){
    console.log('O valor do ingresso é R$880,00.')
    console.log(`O valor total é: R$${880.00*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='do' && etapaDoJogo.toLowerCase()==='fi' && categoria===4){
    console.log('O valor do ingresso é R$330,00.')
    console.log(`O valor total é: R$${330.00*quantidadeIngressos}`)
} 

//Jogos Internacionais Semi-Final
  else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='sf' && categoria===1){
    console.log(`O valor do ingresso é: R$${dolar*1320.00}.`)
    console.log(`O valor total é: R$${(dolar*1320.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='sf' && categoria===2){
    console.log(`O valor do ingresso é: R$${dolar*880.00}.`)
    console.log(`O valor total é: R$${(dolar*880.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='sf' && categoria===3){
    console.log(`O valor do ingresso é: R$${dolar*550.00}.`)
    console.log(`O valor total é: R$${(dolar*550.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='sf' && categoria===4){
    console.log(`O valor do ingresso é: R$${dolar*220.00}.`)
    console.log(`O valor total é: R$${(dolar*220.00)*quantidadeIngressos}`)
} 

//Jogos Internacionais Terceiro Lugar
else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='dt' && categoria===1){
    console.log(`O valor do ingresso é: R$${dolar*660.00}.`)
    console.log(`O valor total é: R$${(dolar*660.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='dt' && categoria===2){
    console.log(`O valor do ingresso é: R$${dolar*440.00}.`)
    console.log(`O valor total é: R$${(dolar*440.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='dt' && categoria===3){
    console.log(`O valor do ingresso é: R$${dolar*330.00}.`)
    console.log(`O valor total é: R$${(dolar*330.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='dt' && categoria===4){
    console.log(`O valor do ingresso é: R$${dolar*170.00}.`)
    console.log(`O valor total é: R$${(dolar*170.00)*quantidadeIngressos}`)
} 

//Jogos Internacionais Final
else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='fi' && categoria===1){
    console.log(`O valor do ingresso é: R$${dolar*1980.00}.`)
    console.log(`O valor total é: R$${(dolar*1980.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='fi' && categoria===2){
    console.log(`O valor do ingresso é: R$${dolar*1320.00}.`)
    console.log(`O valor total é: R$${(dolar*1320.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='fi' && categoria===3){
    console.log(`O valor do ingresso é: R$${dolar*880.00}.`)
    console.log(`O valor total é: R$${(dolar*880.00)*quantidadeIngressos}`)
} else if(tipoDeJogo.toLowerCase()==='in' && etapaDoJogo.toLowerCase()==='fi' && categoria===4){
    console.log(`O valor do ingresso é: R$${dolar*330.00}.`)
    console.log(`O valor total é: R$${(dolar*330.00)*quantidadeIngressos}`)
} else {
    console.log('Não foi possível identificar o seu ingresso, verifique os dados e preencha novamente.')
}