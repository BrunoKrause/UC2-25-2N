const nomeCompleto = prompt('Digite seu nome completo:')
let tipoDeJogo = prompt('Qual o tipo de jogo Internacional(IN) ou Doméstico(DO)?')
const etapaDoJogo = prompt('É jogo de Semi-final(SF), Disputa por terceiro lugar(DT) ou Final(FI)?')
const categoria = Number(prompt('Qual a categoria(1,2,3 ou4)?'))
const quantidadeIngressos = Number(prompt('Quantos ingressos?'))

console.log('Nome:', nomeCompleto)
console.log('Tipo de Jogo:',tipoDeJogo, 'Etapa:',etapaDoJogo, 'Categoria do(s) ingresso(s):',categoria, 'Quantidade:', quantidadeIngressos, 'ingressos.')
