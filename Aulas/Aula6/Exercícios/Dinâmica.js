const ouroTotal = 75000
const membrosTripulação = 9
const recompensaBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
const bonusExperiencia = 500
const forcaTripulação = 95

let ouroPorMembro = (ouroTotal/membrosTripulação)
let restoOuro = (ouroTotal%membrosTripulação)
let novaRecompensaLuffy = (recompensaBaseLuffy+aumentoRecompensa)
let poderLuffy = (recompensaBaseLuffy*bonusExperiencia)
aumentoRecompensa -= 50000000

console.log("Ouro por membro",ouroPorMembro)
console.log("Restante do ouro após divisão",restoOuro)
console.log("Nova recompensa base de Luffy",novaRecompensaLuffy)
console.log("Pode do Luffy",poderLuffy)
console.log("Redução do aumento",aumentoRecompensa)

let forcaInimigo = 120
let chanceVitoria = 0.7
let limiteSegurança = 0.8
let temAkumaNoMi = true
let inimigoTemHaki = true
let combateJusto = "sim"
let combateRapido = "sim"

let podeVencer = forcaTripulação>=forcaInimigo
let riscoAlto = chanceVitoria<limiteSegurança
let batalhaFacil = combateJusto==combateRapido

console.log("A forcaTripulacao é maior ou igual à forcaInimigo?",podeVencer)
console.log("A chanceVitoria é menor que o limiteSeguranca?",riscoAlto)
console.log("O combateJusto é igual ao combateRapido?",batalhaFacil)